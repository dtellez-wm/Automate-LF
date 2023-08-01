# -*- coding: utf-8 -*-

import os
from PIL import Image

logos = [
  "C:\\xampp5_6\\htdocs\\WM-AVLWebmapsCL\\default_css\\Home\\images\\Loading\\7ff97c575adfd4576e131ac12aa879f26065e274_imgCompatibilidad.png",
  "C:\\xampp5_6\\htdocs\\WM-AVLWebmapsCL\\default_css\\Home\\images\\estilos\\7ff97c575adfd4576e131ac12aa879f26065e274_headerReportes.jpg",
  "C:\\xampp5_6\\htdocs\\WM-AVLWebmapsCL\\default_css\\Home\\images\\estilos\\7ff97c575adfd4576e131ac12aa879f26065e274_imgPassword.png",
  "C:\\xampp5_6\\htdocs\\WM-AVLWebmapsCL\\default_css\\Home\\images\\estilos\\7ff97c575adfd4576e131ac12aa879f26065e274_loading.png",
  "C:\\xampp5_6\\htdocs\\WM-AVLWebmapsCL\\default_css\\Home\\images\\estilos\\7ff97c575adfd4576e131ac12aa879f26065e274_bgCenter.png",
  "C:\\xampp5_6\\htdocs\\WM-AVLWebmapsCL\\default_css\\Home\\images\\estilos\\7ff97c575adfd4576e131ac12aa879f26065e274_bgCenter_.png",
  "C:\\xampp5_6\\htdocs\\WM-AVLWebmapsCL\\default_css\\Home\\images\\estilos\\7ff97c575adfd4576e131ac12aa879f26065e274_headerReportes.png",
  "C:\\xampp5_6\\htdocs\\WM-AVLWebmapsCL\\default_css\\Home\\images\\estilos\\7ff97c575adfd4576e131ac12aa879f26065e274_imgMailHeader001.png",
  "C:\\xampp5_6\\htdocs\\WM-AVLWebmapsCL\\default_css\\AdministracionNew\\images\\7ff97c575adfd4576e131ac12aa879f26065e274_logo-index-avl.png",
  "C:\\xampp5_6\\htdocs\\WM-AVLWebmapsCL\\default_css\\servErr\\img\\7ff97c575adfd4576e131ac12aa879f26065e274_logo.png",
  "C:\\xampp5_6\\htdocs\\WM-AVLWebmapsCL\\default_css\\Mantenimiento\\images\\7ff97c575adfd4576e131ac12aa879f26065e274_logoLogin.png",
  "C:\\xampp5_6\\htdocs\\WM-AVLWebmapsCL\\default_css\\Administradores\\images\\7ff97c575adfd4576e131ac12aa879f26065e274_rastreoMail.png",
  "C:\\xampp5_6\\htdocs\\WM-AVLWebmapsCL\\default_css\\HomeNewVisor\\img\\logos\\7ff97c575adfd4576e131ac12aa879f26065e274_logoClienteBarraTareas.png",
  "C:\\xampp5_6\\htdocs\\WM-AVLWebmapsCL\\default_css\\HomeNewVisor\\img\\logos\\7ff97c575adfd4576e131ac12aa879f26065e274_logoHeaderSideNav.png",
  "C:\\xampp5_6\\htdocs\\WM-AVLWebmapsCL\\default_css\\HomeNewVisor\\img\\logos\\7ff97c575adfd4576e131ac12aa879f26065e274_iconBarraHomeLogoCliente.png",
  "C:\\xampp5_6\\htdocs\\WM-AVLWebmapsCL\\default_css\\LogIn\\images\\7ff97c575adfd4576e131ac12aa879f26065e274_3_1_bg.png",
  "C:\\xampp5_6\\htdocs\\WM-AVLWebmapsCL\\default_css\\LogIn\\images\\7ff97c575adfd4576e131ac12aa879f26065e274_bgLogin.png",
  "C:\\xampp5_6\\htdocs\\WM-AVLWebmapsCL\\default_css\\LogIn\\images\\7ff97c575adfd4576e131ac12aa879f26065e274_logoLogin.png",
  "C:\\xampp5_6\\htdocs\\WM-AVLWebmapsCL\\default_css\\LogIn\\images\\7ff97c575adfd4576e131ac12aa879f26065e274_logoLoginMobile.png",
  "C:\\xampp5_6\\htdocs\\WM-AVLWebmapsCL\\mobile\\css\\Home\\images\\7ff97c575adfd4576e131ac12aa879f26065e274_fondo2.png",
#   "C:\\xampp5_6\\htdocs\\WM-AVLWebmapsCL\\mobile\\css\\Login\\images\\7ff97c575adfd4576e131ac12aa879f26065e274_logoLogin.svg",
  "C:\\xampp5_6\\htdocs\\WM-AVLWebmapsCL\\mobile\\css\\Login\\images\\7ff97c575adfd4576e131ac12aa879f26065e274_MLogin.png",
  "C:\\xampp5_6\\htdocs\\WM-AVLWebmapsCL\\mobile\\css\\Home\\images\\7ff97c575adfd4576e131ac12aa879f26065e274_iconoApp.png",
  "C:\\xampp5_6\\htdocs\\WM-AVLWebmapsCL\\default_css\\Home\\images\\estilos\\7ff97c575adfd4576e131ac12aa879f26065e274_bgRight.png",
];

class ImageInfo:
    def __init__(self, path, width, height):
        self.name = os.path.basename(path)
        self.path = path
        self.width = width
        self.height = height

    def __str__(self):
        return "ImageInfo(name='{}', width={}, height={})".format(self.name, self.width, self.height)



def create_image_info_objects(paths):
    image_info_objects = []

    for path in paths:
        if os.path.exists(path):
            image = Image.open(path)
            image_info = ImageInfo(path, image.width, image.height)
            image_info_objects.append(image_info)
        else:
            print(f"File does not exist: {path}")

    return image_info_objects

image_info_objects = create_image_info_objects(logos)
for image_info in image_info_objects:
    print(image_info)


def create_canvas_with_logo(image_info_objects, logo_path):
    if not os.path.exists(logo_path):
        print("Logo file does not exist: {}".format(logo_path))
        return

    logo = Image.open(logo_path)

    for image_info in image_info_objects:
        image_path = image_info.path  # Utiliza la ruta completa de la imagen
        if os.path.exists(image_path):  # Verifica si la imagen existe
            image = Image.open(image_path)

            # Calculate the logo size (90% of the canvas height)
            logo_height = int(image_info.height * 0.9)
            logo_resized = logo.resize((logo.width * logo_height // logo.height, logo_height))  # Resize logo

            # Calculate the position to center the logo
            pos_x = (image_info.width - logo_resized.width) // 2
            pos_y = (image_info.height - logo_resized.height) // 2

            # Draw the logo on the image
            image.paste(logo_resized, (pos_x, pos_y), logo_resized)  # Paste resized logo
            # output_path = os.path.join(os.path.dirname(image_info.path), "{}_with_logo.png".format(image_info.name))
            
            # Cambiamos la ruta de salida para guardar las imágenes en la carpeta "iconos"
            output_folder = "C:\\Users\\david\\Escritorio\\Automate-LF\\iconos"
            if not os.path.exists(output_folder):
                os.makedirs(output_folder)
            output_path = os.path.join(output_folder, "{}_with_logo.png".format(image_info.name))
            image.save(output_path)
            
        else:
            print("Image file does not exist: {}".format(image_path))

    print("All logos have been added to images")

logo_path = "C:\\Users\\david\\Escritorio\\Automate-LF\\logo.png"  # Asegúrate de especificar la ruta correcta del logotipo
create_canvas_with_logo(image_info_objects, logo_path)
