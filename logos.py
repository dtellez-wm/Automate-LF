# -*- coding: utf-8 -*-

import os
from PIL import Image
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
from selenium import webdriver
from selenium.webdriver.chrome.service import Service
import time

logos = [
    "C:\\xampp5_6\\htdocs\\WM-AVLWebmapsCL\\default_css\\Home\\images\\Loading\\7ff97c575adfd4576e131ac12aa879f26065e274_imgCompatibilidad.png",
    "C:\\xampp5_6\\htdocs\\WM-AVLWebmapsCL\\default_css\\Home\\images\\estilos\\7ff97c575adfd4576e131ac12aa879f26065e274_headerReportes.jpg",
    "C:\\xampp5_6\\htdocs\\WM-AVLWebmapsCL\\default_css\\Home\\images\\estilos\\7ff97c575adfd4576e131ac12aa879f26065e274_imgPassword.png",
    "C:\\xampp5_6\\htdocs\\WM-AVLWebmapsCL\\default_css\\Home\\images\\estilos\\7ff97c575adfd4576e131ac12aa879f26065e274_loading.png",
    "C:\\xampp5_6\\htdocs\\WM-AVLWebmapsCL\\default_css\\Home\\images\\estilos\\7ff97c575adfd4576e131ac12aa879f26065e274_headerReportes.png",
    "C:\\xampp5_6\\htdocs\\WM-AVLWebmapsCL\\default_css\\servErr\\img\\7ff97c575adfd4576e131ac12aa879f26065e274_logo.png",
    "C:\\xampp5_6\\htdocs\\WM-AVLWebmapsCL\\default_css\\Administradores\\images\\7ff97c575adfd4576e131ac12aa879f26065e274_rastreoMail.png",
    "C:\\xampp5_6\\htdocs\\WM-AVLWebmapsCL\\default_css\\HomeNewVisor\\img\\logos\\7ff97c575adfd4576e131ac12aa879f26065e274_logoHeaderSideNav.png",
    "C:\\xampp5_6\\htdocs\\WM-AVLWebmapsCL\\default_css\\HomeNewVisor\\img\\logos\\7ff97c575adfd4576e131ac12aa879f26065e274_iconBarraHomeLogoCliente.png",
    "C:\\xampp5_6\\htdocs\\WM-AVLWebmapsCL\\default_css\\LogIn\\images\\7ff97c575adfd4576e131ac12aa879f26065e274_3_1_bg.png",
    #   "C:\\xampp5_6\\htdocs\\WM-AVLWebmapsCL\\mobile\\css\\Login\\images\\7ff97c575adfd4576e131ac12aa879f26065e274_logoLogin.svg",
    "C:\\xampp5_6\\htdocs\\WM-AVLWebmapsCL\\default_css\\Home\\images\\estilos\\7ff97c575adfd4576e131ac12aa879f26065e274_bgRight.png",
]

logos_white = [
    "C:\\xampp5_6\\htdocs\\WM-AVLWebmapsCL\\default_css\\Home\\images\\estilos\\7ff97c575adfd4576e131ac12aa879f26065e274_bgCenter.png",
    "C:\\xampp5_6\\htdocs\\WM-AVLWebmapsCL\\default_css\\HomeNewVisor\\img\\logos\\7ff97c575adfd4576e131ac12aa879f26065e274_logoClienteBarraTareas.png",
    "C:\\xampp5_6\\htdocs\\WM-AVLWebmapsCL\\mobile\\css\\Home\\images\\7ff97c575adfd4576e131ac12aa879f26065e274_iconoApp.png",
    "C:\\xampp5_6\\htdocs\\WM-AVLWebmapsCL\\default_css\\Home\\images\\estilos\\7ff97c575adfd4576e131ac12aa879f26065e274_imgMailHeader001.png",
    "C:\\xampp5_6\\htdocs\\WM-AVLWebmapsCL\\default_css\\Mantenimiento\\images\\7ff97c575adfd4576e131ac12aa879f26065e274_logoLogin.png",
    "C:\\xampp5_6\\htdocs\\WM-AVLWebmapsCL\\default_css\\LogIn\\images\\7ff97c575adfd4576e131ac12aa879f26065e274_logoLogin.png",
    "C:\\xampp5_6\\htdocs\\WM-AVLWebmapsCL\\default_css\\LogIn\\images\\7ff97c575adfd4576e131ac12aa879f26065e274_logoLoginMobile.png",
    "C:\\xampp5_6\\htdocs\\WM-AVLWebmapsCL\\default_css\\AdministracionNew\\images\\7ff97c575adfd4576e131ac12aa879f26065e274_logo-index-avl.png",
    "C:\\xampp5_6\\htdocs\\WM-AVLWebmapsCL\\default_css\\Home\\images\\estilos\\7ff97c575adfd4576e131ac12aa879f26065e274_bgCenter_.png",
    "C:\\xampp5_6\\htdocs\\WM-AVLWebmapsCL\\mobile\\css\\Login\\images\\7ff97c575adfd4576e131ac12aa879f26065e274_MLogin.png",
]


# ... definición de la clase ImageInfo y la función create_image_info_objects ...
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

# Función para agregar el logotipo a las imágenes existentes


def add_logo_to_images(image_info_objects, logo_path):
    logo = Image.open(logo_path)

    for image_info in image_info_objects:
        image_path = image_info.path
        if os.path.exists(image_path):
            image = Image.open(image_path)

            # Código para agregar el logotipo
            logo_height = int(image_info.height * 0.9)
            logo_resized = logo.resize(
                (logo.width * logo_height // logo.height, logo_height))
            pos_x = (image_info.width - logo_resized.width) // 2
            pos_y = (image_info.height - logo_resized.height) // 2
            image.paste(logo_resized, (pos_x, pos_y), logo_resized)

            output_folder = "C:\\Users\\david\\Escritorio\\Automate-LF\\iconos"
            if not os.path.exists(output_folder):
                os.makedirs(output_folder)
            # output_path = os.path.join(output_folder, "{}_with_logo.png".format(image_info.name))
            output_path = os.path.join(
                output_folder, "{}".format(image_info.name))
            image.save(output_path)
        else:
            print("Image file does not exist: {}".format(image_path))

# Función para crear un lienzo en blanco y agregar el logotipo


def create_canvas_with_white_logo(image_info_objects, logo_path):
    logo = Image.open(logo_path)

    for image_info in image_info_objects:
        # Crear un lienzo en blanco del mismo tamaño que la imagen original
        image = Image.new(
            "RGB", (image_info.width, image_info.height), "white")

        # Calculate the logo size (90% of the canvas height)
        logo_height = int(image_info.height * 0.9)
        logo_resized = logo.resize(
            (logo.width * logo_height // logo.height, logo_height))  # Resize logo

        # Calculate the position to center the logo
        pos_x = (image_info.width - logo_resized.width) // 2
        pos_y = (image_info.height - logo_resized.height) // 2

        # Draw the logo on the image
        image.paste(logo_resized, (pos_x, pos_y),
                    logo_resized)  # Paste resized logo

        output_folder = "C:\\Users\\david\\Escritorio\\Automate-LF\\iconos_white"
        if not os.path.exists(output_folder):
            os.makedirs(output_folder)
        output_path = os.path.join(output_folder, "{}".format(image_info.name))
        image.save(output_path)


# Crear objetos ImageInfo para los dos arreglos
image_info_objects = create_image_info_objects(logos)
image_info_objects_white = create_image_info_objects(logos_white)


# Ruta del logotipo
logo_path = "C:\\Users\\david\\Escritorio\\Automate-LF\\logo.png"

# Agregar el logotipo a las imágenes existentes
add_logo_to_images(image_info_objects, logo_path)

# Crear un lienzo en blanco y agregar el logotipo para los elementos en logos_white
create_canvas_with_white_logo(image_info_objects_white, logo_path)

print("All logos have been processed")


# Test Block

path = ".\\chromedriver.exe"
service = Service(executable_path=path)
driver = webdriver.Chrome(service=service)
web = "http://dev.avl.local.webmaps.com.mx/"

driver.get(web)  # Abre el navegador en la página web

wait = WebDriverWait(driver, 10)
login = wait.until(EC.presence_of_element_located(
    (By.ID, "txtUser")))  # Usar la espera aquí
password = wait.until(EC.presence_of_element_located(
    (By.ID, "txtPass")))  # Usar la espera aquí

# Autenticación
login.send_keys("david.tellez@webmaps.com.mx")
password.send_keys("webmaps54474")
button = driver.find_element(By.ID, "btnIngresar")
button.click()

# Aquí debes agregar una línea para ingresar la contraseña

time.sleep(10000)  # Mantén el navegador abierto durante 10 segundos
driver.quit()  # Cierra el navegador
