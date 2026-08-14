# Imagenes - Dra. Eimy Stephany Pinto Arita

## Estructura de Carpetas

```
public/images/
├── doctor/          # Fotos de la doctora
├── services/        # Imagenes de servicios y secciones
├── studies/         # Imagenes de estudios cardiovasculares
├── location/        # Fotos del consultorio y hospital
└── icons/           # Iconos y logos personalizados
```

---

## Imagenes Requeridas

### /doctor/
| Archivo | Placeholder en Codigo | Uso | Dimensiones Recomendadas |
|---------|----------------------|-----|--------------------------|
| `hero.jpg` | DRA_PINTO_HERO_IMAGE | Hero principal | 800x1000px (portrait) |
| `about.jpg` | DRA_PINTO_ABOUT_IMAGE | Seccion About | 600x800px (portrait) |
| `profile.jpg` | - | Header/Footer | 200x200px (square) |

### /services/
| Archivo | Placeholder en Codigo | Uso | Dimensiones Recomendadas |
|---------|----------------------|-----|--------------------------|
| `rehabilitacion.jpg` | REHABILITACION_CARDIOPULMONAR_IMAGE | Seccion Rehabilitacion | 800x600px (landscape) |
| `cardiometabolico.jpg` | CARDIOMETABOLICO_IMAGE | Seccion Cardiometabolico | 800x600px (landscape) |
| `cardiologia.jpg` | CARDIOLOGIA_NO_INVASIVA_IMAGE | Seccion Cardiologia | 800x600px (landscape) |

### /studies/
| Archivo | Placeholder en Codigo | Uso | Dimensiones Recomendadas |
|---------|----------------------|-----|--------------------------|
| `ecg.jpg` | ECG_IMAGE | Card Electrocardiograma | 400x300px |
| `holter.jpg` | HOLTER_IMAGE | Card Holter | 400x300px |
| `mapa.jpg` | MAPA_IMAGE | Card MAPA | 400x300px |
| `eco-domicilio.jpg` | - | Card Ecocardiograma | 400x300px |

### /location/
| Archivo | Placeholder en Codigo | Uso | Dimensiones Recomendadas |
|---------|----------------------|-----|--------------------------|
| `consultorio.jpg` | CONSULTORIO_IMAGE | Seccion Trust | 400x400px |
| `hospital.jpg` | - | Seccion Location | 800x600px |

### /icons/
| Archivo | Uso |
|---------|-----|
| `favicon.ico` | Favicon del sitio |
| `favicon-16x16.png` | Favicon 16px |
| `favicon-32x32.png` | Favicon 32px |
| `apple-touch-icon.png` | Icon para iOS (180x180px) |
| `og-image.jpg` | Open Graph / Social sharing (1200x630px) |

---

## Especificaciones Tecnicas

### Formatos Recomendados
- **Fotos:** `.jpg` o `.webp` (preferido para web)
- **Iconos/Logos:** `.png` o `.svg`
- **Favicon:** `.ico`, `.png`

### Optimizacion
- Comprimir imagenes antes de subir (TinyPNG, Squoosh)
- Usar formato WebP cuando sea posible
- Mantener peso < 200KB para fotos principales
- Mantener peso < 100KB para thumbnails

### Aspect Ratios
- Hero: 4:5 (portrait)
- About: 3:4 (portrait)
- Servicios: 4:3 (landscape)
- Cards: 4:3 (landscape)
- Profile: 1:1 (square)
- OG Image: 1.91:1 (1200x630)

---

## Como Reemplazar Placeholders

1. Colocar la imagen en la carpeta correspondiente
2. Actualizar el componente para usar `next/image`:

```tsx
import Image from "next/image";

<Image
  src="/images/doctor/hero.jpg"
  alt="Dra. Eimy Stephany Pinto Arita"
  width={800}
  height={1000}
  priority // para imagenes above the fold
/>
```

3. Para imagenes de fondo, usar CSS:

```tsx
<div
  className="bg-cover bg-center"
  style={{ backgroundImage: "url('/images/services/rehabilitacion.jpg')" }}
/>
```

---

## SEO - Alt Text Sugerido

| Imagen | Alt Text |
|--------|----------|
| hero.jpg | "Dra. Eimy Stephany Pinto Arita - Medicina con Empatia" |
| about.jpg | "Dra. Eimy Pinto en Hospital La Catolica" |
| rehabilitacion.jpg | "Rehabilitacion Cardiopulmonar - Recuperacion guiada" |
| cardiometabolico.jpg | "Prevencion de Riesgo Cardiometabolico" |
| ecg.jpg | "Electrocardiograma - Estudio cardiovascular" |
| holter.jpg | "Monitor Holter - Monitoreo cardiaco 24 horas" |
| mapa.jpg | "MAPA - Monitoreo de Presion Arterial" |
| consultorio.jpg | "Consultorio Dra. Pinto - Hospital La Catolica" |

---

Ultima actualizacion: 2026-08-12
