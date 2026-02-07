# Reglas de medallas

## Cálculo base
- Si el usuario tiene al menos 1 actividad aprobada, recibe medallas definidas en `DEFAULT_BADGES`.

## Ejemplos
- **0 actividades aprobadas** → sin medallas.
- **1 actividad aprobada** → "Donante Inicial".
- **3 actividades aprobadas** → "Donante Inicial" + "Manos Solidarias".

## Dónde modificar
- Código: `src/constants.ts` y `src/badgeRules.ts`.
- Comentarios `// EDIT HERE` indican el lugar recomendado para cambios.
