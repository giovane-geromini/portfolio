import Image from "next/image";
import Link from "next/link";
import { professionalProfile } from "../data/professionalProfile";

type ProfessionalProfileCardProps = {
  priority?: boolean;
};

export default function ProfessionalProfileCard({
  priority = false,
}: ProfessionalProfileCardProps) {
  const logisticsEducation = professionalProfile.education[0];
  const dataEducation = professionalProfile.education[1];
  const webEducation = professionalProfile.education[2];

  return (
    <Link
      href="/sobre"
      className="professional-profile-card"
      aria-label={`Conheça a trajetória profissional de ${professionalProfile.name}`}
    >
      <div className="professional-profile-photo-wrap">
        <Image
          className="professional-profile-photo"
          src={professionalProfile.image}
          alt={`Foto profissional de ${professionalProfile.name}`}
          fill
          priority={priority}
          quality={92}
          sizes="(max-width: 720px) 168px, (max-width: 980px) 180px, 150px"
        />
      </div>

      <div className="professional-profile-content">
        <span className="professional-profile-status">
          {professionalProfile.availability}
        </span>

        <div>
          <h2>{professionalProfile.name}</h2>
          <p className="professional-profile-role">
            {professionalProfile.role}
          </p>
        </div>

        <dl className="professional-profile-education">
          <div>
            <dt>Formação</dt>
            <dd>{logisticsEducation.course}</dd>
          </div>

          <div>
            <dt>Especialização</dt>
            <dd>{dataEducation.course}</dd>
          </div>

          <div>
            <dt>Em andamento</dt>
            <dd>{webEducation.course}</dd>
          </div>
        </dl>

        <span className="professional-profile-link">
          Conheça minha trajetória
          <span aria-hidden="true">→</span>
        </span>
      </div>
    </Link>
  );
}
