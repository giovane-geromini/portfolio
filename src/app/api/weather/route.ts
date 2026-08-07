const FALLBACK_LOCATION = {
  city: "São Carlos",
  latitude: -22.0174,
  longitude: -47.8908,
};

type OpenMeteoCurrent = {
  temperature_2m?: number;
  apparent_temperature?: number;
  weather_code?: number;
  is_day?: number;
  wind_speed_10m?: number;
};

type OpenMeteoResponse = {
  current?: OpenMeteoCurrent;
};

export const dynamic = "force-dynamic";
export const runtime = "nodejs";

function decodeHeaderValue(value: string | null) {
  if (!value) {
    return null;
  }

  try {
    return decodeURIComponent(value);
  } catch {
    return value;
  }
}

function parseCoordinate(value: string | null) {
  if (!value) {
    return null;
  }

  const parsed = Number.parseFloat(value);
  return Number.isFinite(parsed) ? parsed : null;
}

function describeWeather(code: number, isDay: boolean) {
  if (code === 0) {
    return {
      condition: isDay ? "Céu limpo" : "Noite limpa",
      icon: isDay ? "☀︎" : "☾",
    };
  }

  if (code === 1) {
    return {
      condition: "Predomínio de sol",
      icon: isDay ? "◑" : "☾",
    };
  }

  if (code === 2) {
    return {
      condition: "Parcialmente nublado",
      icon: "☁︎",
    };
  }

  if (code === 3) {
    return {
      condition: "Nublado",
      icon: "☁",
    };
  }

  if ([45, 48].includes(code)) {
    return {
      condition: "Neblina",
      icon: "≋",
    };
  }

  if ([51, 53, 55, 56, 57].includes(code)) {
    return {
      condition: "Garoa",
      icon: "☂",
    };
  }

  if ([61, 63, 65, 66, 67, 80, 81, 82].includes(code)) {
    return {
      condition: "Chuva",
      icon: "☂",
    };
  }

  if ([71, 73, 75, 77, 85, 86].includes(code)) {
    return {
      condition: "Neve",
      icon: "❄",
    };
  }

  if ([95, 96, 99].includes(code)) {
    return {
      condition: "Trovoadas",
      icon: "ϟ",
    };
  }

  return {
    condition: "Condição atual",
    icon: "◌",
  };
}

export async function GET(request: Request) {
  const headerLatitude = parseCoordinate(
    request.headers.get("x-vercel-ip-latitude"),
  );
  const headerLongitude = parseCoordinate(
    request.headers.get("x-vercel-ip-longitude"),
  );
  const headerCity = decodeHeaderValue(
    request.headers.get("x-vercel-ip-city"),
  );

  const hasVisitorLocation =
    headerLatitude !== null && headerLongitude !== null;

  const latitude = hasVisitorLocation
    ? headerLatitude
    : FALLBACK_LOCATION.latitude;
  const longitude = hasVisitorLocation
    ? headerLongitude
    : FALLBACK_LOCATION.longitude;
  const city = headerCity || FALLBACK_LOCATION.city;

  const params = new URLSearchParams({
    latitude: String(latitude),
    longitude: String(longitude),
    current:
      "temperature_2m,apparent_temperature,weather_code,is_day,wind_speed_10m",
    temperature_unit: "celsius",
    wind_speed_unit: "kmh",
    timezone: "auto",
    forecast_days: "1",
  });

  try {
    const response = await fetch(
      `https://api.open-meteo.com/v1/forecast?${params.toString()}`,
      {
        next: {
          revalidate: 900,
        },
      },
    );

    if (!response.ok) {
      throw new Error(`Open-Meteo respondeu com status ${response.status}.`);
    }

    const data = (await response.json()) as OpenMeteoResponse;
    const current = data.current;

    if (!current || typeof current.temperature_2m !== "number") {
      throw new Error("Resposta meteorológica incompleta.");
    }

    const description = describeWeather(
      current.weather_code ?? -1,
      current.is_day !== 0,
    );

    return Response.json(
      {
        city,
        temperature: current.temperature_2m,
        apparentTemperature:
          typeof current.apparent_temperature === "number"
            ? current.apparent_temperature
            : null,
        condition: description.condition,
        icon: description.icon,
        source: hasVisitorLocation ? "visitor" : "fallback",
      },
      {
        headers: {
          "Cache-Control": "private, max-age=300",
        },
      },
    );
  } catch {
    return Response.json(
      {
        city,
        temperature: null,
        apparentTemperature: null,
        condition: "Clima indisponível",
        icon: "◌",
        source: hasVisitorLocation ? "visitor" : "fallback",
      },
      {
        headers: {
          "Cache-Control": "private, max-age=60",
        },
      },
    );
  }
}
