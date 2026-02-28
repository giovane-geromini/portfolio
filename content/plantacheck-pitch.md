# PlantaCheck — resumo de projeto

PlantaCheck é um aplicativo web criado para resolver um problema simples e muito comum: o cuidado inconsistente com plantas.

Muitas pessoas esquecem de regar, não sabem se estão cuidando corretamente ou não possuem um histórico confiável de cuidados. A proposta do PlantaCheck é transformar esse processo em algo claro, organizado e confiável.

## A ideia
O aplicativo permite que usuários organizem suas plantas por casa e ambientes, registrem eventos de rega e exposição ao sol e acompanhem automaticamente o status de cada planta.

O foco não é apenas registrar informações, mas interpretar esses dados e gerar um estado atual confiável.

## Decisão técnica principal
O sistema foi modelado de forma orientada a eventos.  
Ou seja, as plantas não armazenam histórico interno: cada rega, exposição ao sol ou alteração é registrada como um evento, e o estado atual da planta é sempre derivado desses eventos.

Isso evita inconsistências, facilita evolução futura e deixa as regras de negócio centralizadas.

## Principais aprendizados
- Modelagem de dados orientada a eventos
- Definição clara de regras de negócio
- Separação entre estado atual e histórico
- Evolução de produto com uso real
- Deploy contínuo e iteração incremental

## Stack utilizada
- Next.js
- TypeScript
- Supabase
- Tailwind CSS
- Vercel
