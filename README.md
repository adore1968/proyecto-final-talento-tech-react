# 🛒 Proyecto Final de React

Aplicación de e-commerce desarrollada con React y Vite, que incluye carrito de compras, autenticación de usuarios, CRUD completo de productos, búsqueda, paginación y optimización visual para su despliegue final.

---

## 🚀 Funcionalidades Principales

### 1️⃣ Gestión del Carrito y Autenticación

#### ✔ Carrito de Compras (Context API)
- Carrito global manejado con `CarritoContext`.
- Agregar, eliminar y vaciar productos.
- Estado compartido en toda la aplicación.

#### ✔ Autenticación de Usuarios
- `AuthContext` para manejar login y logout.
- Autenticación simulada usando `localStorage`.
- Rutas protegidas para restringir acceso a secciones privadas.

---

## 2️⃣ CRUD de Productos con MockAPI

#### ✔ Crear Productos
- Formulario controlado con validaciones:
  - Nombre obligatorio.
  - Precio mayor a 0.
  - Descripción mínima de 10 caracteres.
- Envío de datos mediante `POST` a MockAPI.

#### ✔ Leer, Editar y Eliminar Productos
- Listado completo usando solicitudes `GET`.
- Edición mediante `PUT`.
- Eliminación mediante `DELETE`.
- Modal de confirmación antes de eliminar.
- Manejo de errores y estados de carga.
- Notificaciones de éxito o error con React Toastify.

---

## 3️⃣ Diseño, Responsividad y Accesibilidad

#### ✔ Bootstrap + Styled-components
- Diseño responsivo utilizando grillas de Bootstrap.
- Estilos personalizados y modulares con styled-components.

#### ✔ Interactividad
- Iconos con React Icons.
- Notificaciones elegantes con React Toastify.

#### ✔ SEO y Accesibilidad
- Configuración de `<title>` y `<meta>` para SEO.
- Elementos interactivos con etiquetas ARIA.

---

## 4️⃣ Búsqueda y Paginación

#### ✔ Barra de Búsqueda
- Filtrado dinámico por nombre o categoría.
- Resultados actualizados mientras el usuario escribe.

#### ✔ Paginador
- División del catálogo en páginas.
- Navegación fluida entre páginas.
- Mejor experiencia de navegación en catálogos grandes.

---

## 5️⃣ Preparación para el Despliegue

#### ✔ Pruebas de Compatibilidad
- Comprobación de funcionamiento en móviles, tablets y escritorio.
- Revisión de tiempos de carga y navegación.

#### ✔ Optimización
- Limpieza del código.
- Eliminación de archivos innecesarios.
- Estado global correctamente organizado.

#### ✔ Documentación
- README con instrucciones claras de instalación y uso.

---

## 🧩 Instalación

```bash
git clone https://github.com/usuario/proyecto-final-react.git
cd proyecto-final-react
npm install
npm run dev
