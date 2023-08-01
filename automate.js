import fs from "fs";
import fse from "fs-extra";
import inquirer from "inquirer";
import path from "path";
import readline from "readline";
import { exec } from "child_process";

const cssFolder = "C:\\xampp5_6\\htdocs\\WM-AVLWebmapsCL\\js\\WMLPLib-1.0.1";
const configFolder = "C:\\xampp5_6\\htdocs\\WM-AVLWebmapsCL\\lib\\lookandfeel_local";
// const estilosPath = `${configFolder}\\_config\\estilos.php`;

function copyAndReplace(file, oldStr, newStr) {
  const regex = new RegExp(oldStr, "g");
  const newFile = file.replace(regex, newStr);
  fs.copyFile(file, newFile, (err) => {
    if (err) {
      console.error(`Error al copiar el archivo: ${err}`);
      return;
    }
    // console.log(`Archivo copiado exitosamente: ${newFile}`);
  });
}

function main(oldString, newString) {
  const images = [
    `C:\\xampp5_6\\htdocs\\WM-AVLWebmapsCL\\mobile\\css\\Home\\images\\${oldString}_fondo2.png`,
    `C:\\xampp5_6\\htdocs\\WM-AVLWebmapsCL\\default_css\\LogIn\\images\\${oldString}_bgLogin.png`,
    `C:\\xampp5_6\\htdocs\\WM-AVLWebmapsCL\\default_css\\LIB\\img\\iconosbusquedasA\\${oldString}_iconosBA_georuta.png`,
    `C:\\xampp5_6\\htdocs\\WM-AVLWebmapsCL\\default_css\\LIB\\img\\iconosbusquedasA\\${oldString}_iconosBA_dispositivos.png`,
    `C:\\xampp5_6\\htdocs\\WM-AVLWebmapsCL\\default_css\\LIB\\img\\iconosbusquedasA\\${oldString}_iconosBA_tipoevnoti.png`,
    `C:\\xampp5_6\\htdocs\\WM-AVLWebmapsCL\\default_css\\LIB\\img\\iconosbusquedasA\\${oldString}_iconosBA_usuarios.png`,
    `C:\\xampp5_6\\htdocs\\WM-AVLWebmapsCL\\default_css\\LIB\\img\\iconosbusquedasA\\${oldString}_iconosBA_flotillas.png`,
    `C:\\xampp5_6\\htdocs\\WM-AVLWebmapsCL\\default_css\\LIB\\img\\iconosbusquedasA\\${oldString}_iconosBA_nivelusuario.png`,
    `C:\\xampp5_6\\htdocs\\WM-AVLWebmapsCL\\default_css\\LIB\\img\\iconosbusquedasA\\${oldString}_iconosBA_protocolo.png`,
    `C:\\xampp5_6\\htdocs\\WM-AVLWebmapsCL\\default_css\\LIB\\img\\iconosbusquedasA\\${oldString}_iconosBA_geocerca.png`,
    `C:\\xampp5_6\\htdocs\\WM-AVLWebmapsCL\\default_css\\LIB\\img\\iconosbusquedasA\\${oldString}_iconosBA_tipoodometro.png`,
    `C:\\xampp5_6\\htdocs\\WM-AVLWebmapsCL\\default_css\\LIB\\img\\iconosbusquedasA\\${oldString}_iconosBA_account.png`,
    `C:\\xampp5_6\\htdocs\\WM-AVLWebmapsCL\\default_css\\LIB\\img\\iconosbusquedasA\\${oldString}_iconosBA-28.png`,
    `C:\\xampp5_6\\htdocs\\WM-AVLWebmapsCL\\default_css\\LIB\\img\\iconosbusquedasA\\${oldString}_iconosBA_tipovehiculo.png`,
    `C:\\xampp5_6\\htdocs\\WM-AVLWebmapsCL\\default_css\\LIB\\img\\iconosbusquedasA\\${oldString}_iconosBA_estancia.png`,
    `C:\\xampp5_6\\htdocs\\WM-AVLWebmapsCL\\default_css\\LIB\\img\\iconosbusquedasA\\${oldString}_iconosBA_comandos.png`,
    `C:\\xampp5_6\\htdocs\\WM-AVLWebmapsCL\\default_css\\LIB\\img\\iconosbusquedasA\\${oldString}_iconosBA_tiponoti.png`,
    `C:\\xampp5_6\\htdocs\\WM-AVLWebmapsCL\\default_css\\LIB\\img\\iconosbusquedasA\\${oldString}_iconosBA_mantenimientos.png`,
    `C:\\xampp5_6\\htdocs\\WM-AVLWebmapsCL\\default_css\\LIB\\img\\iconosbusquedasA\\${oldString}_iconosBA_opcionesequipo.png`,
    `C:\\xampp5_6\\htdocs\\WM-AVLWebmapsCL\\default_css\\LIB\\img\\iconosbusquedasA\\${oldString}_iconosBA_estatusunidad.png`,
    `C:\\xampp5_6\\htdocs\\WM-AVLWebmapsCL\\default_css\\LIB\\img\\iconosbusquedasA\\${oldString}_iconosBA_sensorcombustible.png`,
    `C:\\xampp5_6\\htdocs\\WM-AVLWebmapsCL\\default_css\\LIB\\img\\iconosbusquedasA\\${oldString}_iconosBA_tipocombustible.png`,
    `C:\\xampp5_6\\htdocs\\WM-AVLWebmapsCL\\default_css\\LIB\\img\\iconosbusquedasA\\${oldString}_input.png`,
    `C:\\xampp5_6\\htdocs\\WM-AVLWebmapsCL\\default_css\\LIB\\img\\iconosbusquedasA\\${oldString}_iconosBA_catalogomantenimiento.png`,
    `C:\\xampp5_6\\htdocs\\WM-AVLWebmapsCL\\default_css\\LIB\\img\\iconosbusquedasA\\${oldString}_iconosBA-20.png`,
    `C:\\xampp5_6\\htdocs\\WM-AVLWebmapsCL\\default_css\\LIB\\img\\iconosbusquedasA\\${oldString}_iconosBA_estatusmantenimiento.png`,
    `C:\\xampp5_6\\htdocs\\WM-AVLWebmapsCL\\default_css\\LIB\\img\\iconosbusquedasA\\${oldString}_iconosBA_asignacion.png`,
    `C:\\xampp5_6\\htdocs\\WM-AVLWebmapsCL\\default_css\\LIB\\img\\iconosbusquedasA\\${oldString}_iconosBA_perfiles.png`,
    `C:\\xampp5_6\\htdocs\\WM-AVLWebmapsCL\\default_css\\LIB\\img\\iconosbusquedasA\\${oldString}_iconosBA_unidades.png`,
    `C:\\xampp5_6\\htdocs\\WM-AVLWebmapsCL\\default_css\\LIB\\img\\iconosbusquedasA\\${oldString}_iconosBA_categoriapoi.png`,
    `C:\\xampp5_6\\htdocs\\WM-AVLWebmapsCL\\default_css\\LIB\\img\\iconosbusquedasA\\${oldString}_iconosBA_evento.png`,
    `C:\\xampp5_6\\htdocs\\WM-AVLWebmapsCL\\default_css\\LIB\\img\\iconosbusquedasA\\${oldString}_iconosBA_tipousuario.png`,
    `C:\\xampp5_6\\htdocs\\WM-AVLWebmapsCL\\default_css\\LIB\\img\\iconosbusquedasA\\${oldString}_iconosBA_apn.png`,
    `C:\\xampp5_6\\htdocs\\WM-AVLWebmapsCL\\default_css\\LIB\\img\\iconosbusquedasA\\${oldString}_iconosBA_clientes.png`,
    `C:\\xampp5_6\\htdocs\\WM-AVLWebmapsCL\\default_css\\LIB\\img\\iconosbusquedasA\\${oldString}_iconosBA_eventos.png`,
    `C:\\xampp5_6\\htdocs\\WM-AVLWebmapsCL\\default_css\\Home\\images\\${oldString}_iconclearGenericoBlue.png`,
    `C:\\xampp5_6\\htdocs\\WM-AVLWebmapsCL\\default_css\\Home\\images\\${oldString}_hojitaOBDCHECK.png`,
    `C:\\xampp5_6\\htdocs\\WM-AVLWebmapsCL\\default_css\\Home\\images\\estilos\\${oldString}_bgRight_.png`,
    `C:\\xampp5_6\\htdocs\\WM-AVLWebmapsCL\\default_css\\Home\\images\\estilos\\iconografia\\${oldString}_pReportes.png`,
    `C:\\xampp5_6\\htdocs\\WM-AVLWebmapsCL\\default_css\\Home\\images\\estilos\\${oldString}_bgRight.png`,
    `C:\\xampp5_6\\htdocs\\WM-AVLWebmapsCL\\default_css\\Home\\images\\estilos\\iconografia\\${oldString}_spriteComandos001.png`,
    `C:\\xampp5_6\\htdocs\\WM-AVLWebmapsCL\\default_css\\Home\\images\\estilos\\iconografia\\${oldString}_plantilla.png`,
    `C:\\xampp5_6\\htdocs\\WM-AVLWebmapsCL\\default_css\\Home\\images\\estilos\\iconografia\\${oldString}_plantillaHover.png`,
    `C:\\xampp5_6\\htdocs\\WM-AVLWebmapsCL\\default_css\\Home\\images\\${oldString}_iconBajar.png`,
    `C:\\xampp5_6\\htdocs\\WM-AVLWebmapsCL\\default_css\\Home\\images\\${oldString}_iconBajarHover.png`,
    `C:\\xampp5_6\\htdocs\\WM-AVLWebmapsCL\\default_css\\Home\\images\\${oldString}_hojitaOBDCHECKHover.png`,
    `C:\\xampp5_6\\htdocs\\WM-AVLWebmapsCL\\default_css\\Home\\images\\${oldString}_iconEditarGenericoBLue.png`,
    `C:\\xampp5_6\\htdocs\\WM-AVLWebmapsCL\\default_css\\Home\\images\\${oldString}_gasolinaIcon.png`,
    `C:\\xampp5_6\\htdocs\\WM-AVLWebmapsCL\\default_css\\Home\\images\\dashboard\\${oldString}_iconRenovacion.png`,
    `C:\\xampp5_6\\htdocs\\WM-AVLWebmapsCL\\default_css\\Home\\images\\dashboard\\${oldString}_colectivos.png`,
    `C:\\xampp5_6\\htdocs\\WM-AVLWebmapsCL\\default_css\\Home\\images\\dashboard\\${oldString}_iconVerificacion.png`,
    `C:\\xampp5_6\\htdocs\\WM-AVLWebmapsCL\\default_css\\Home\\images\\dashboard\\${oldString}_iconTiempoKilometraje.png`,
    `C:\\xampp5_6\\htdocs\\WM-AVLWebmapsCL\\default_css\\Home\\images\\dashboard\\${oldString}_calen-01.png`,
    `C:\\xampp5_6\\htdocs\\WM-AVLWebmapsCL\\default_css\\Home\\images\\dashboard\\${oldString}_mantenimientos.png`,
    `C:\\xampp5_6\\htdocs\\WM-AVLWebmapsCL\\default_css\\Home\\images\\${oldString}_iconSubir.png`,
    `C:\\xampp5_6\\htdocs\\WM-AVLWebmapsCL\\default_css\\Home\\images\\${oldString}_iconSubirHover.png`,
    `C:\\xampp5_6\\htdocs\\WM-AVLWebmapsCL\\default_css\\AdministracionNew\\images\\${oldString}_unidades.png`,
    `C:\\xampp5_6\\htdocs\\WM-AVLWebmapsCL\\default_css\\AdministracionNew\\images\\${oldString}_aprovisionamiento.png`,
    `C:\\xampp5_6\\htdocs\\WM-AVLWebmapsCL\\default_css\\AdministracionNew\\images\\${oldString}_arrow1-01.png`,
    `C:\\xampp5_6\\htdocs\\WM-AVLWebmapsCL\\default_css\\AdministracionNew\\images\\${oldString}_arrow_left-01.png`,
    `C:\\xampp5_6\\htdocs\\WM-AVLWebmapsCL\\default_css\\AdministracionNew\\images\\${oldString}_comandos.png`,
    `C:\\xampp5_6\\htdocs\\WM-AVLWebmapsCL\\default_css\\AdministracionNew\\images\\${oldString}_colectivos.png`,
    `C:\\xampp5_6\\htdocs\\WM-AVLWebmapsCL\\default_css\\AdministracionNew\\images\\${oldString}_usuarios.png`,
    `C:\\xampp5_6\\htdocs\\WM-AVLWebmapsCL\\default_css\\AdministracionNew\\images\\${oldString}_jasper.png`,
    `C:\\xampp5_6\\htdocs\\WM-AVLWebmapsCL\\default_css\\AdministracionNew\\images\\${oldString}_perfiles.png`,
    `C:\\xampp5_6\\htdocs\\WM-AVLWebmapsCL\\default_css\\AdministracionNew\\images\\${oldString}_eventos.png`,
    `C:\\xampp5_6\\htdocs\\WM-AVLWebmapsCL\\default_css\\AdministracionNew\\images\\${oldString}_arrowSign.png`,
    `C:\\xampp5_6\\htdocs\\WM-AVLWebmapsCL\\default_css\\AdministracionNew\\images\\${oldString}_arrowSignRight.png`,
    `C:\\xampp5_6\\htdocs\\WM-AVLWebmapsCL\\default_css\\AdministracionNew\\images\\${oldString}_notificaciones.png`,
    `C:\\xampp5_6\\htdocs\\WM-AVLWebmapsCL\\default_css\\AdministracionNew\\images\\${oldString}_arrowSignLeft.png`,
    `C:\\xampp5_6\\htdocs\\WM-AVLWebmapsCL\\default_css\\AdministracionNew\\images\\${oldString}_arrow_left-02.png`,
    `C:\\xampp5_6\\htdocs\\WM-AVLWebmapsCL\\default_css\\AdministracionNew\\images\\${oldString}_sims.png`,
    `C:\\xampp5_6\\htdocs\\WM-AVLWebmapsCL\\default_css\\AdministracionNew\\images\\${oldString}_arrow1-02.png`,
    `C:\\xampp5_6\\htdocs\\WM-AVLWebmapsCL\\default_css\\AdministracionNew\\images\\${oldString}_flotillas.png`,
    `C:\\xampp5_6\\htdocs\\WM-AVLWebmapsCL\\default_css\\AdministracionNew\\images\\${oldString}_sap_old.png`,
    `C:\\xampp5_6\\htdocs\\WM-AVLWebmapsCL\\default_css\\AdministracionNew\\images\\${oldString}_dispositivos.png`,
    `C:\\xampp5_6\\htdocs\\WM-AVLWebmapsCL\\default_css\\AdministracionNew\\images\\${oldString}_sap.png`,
    `C:\\xampp5_6\\htdocs\\WM-AVLWebmapsCL\\default_css\\AdministracionNew\\images\\${oldString}_mantenimientos.png`,
    `C:\\xampp5_6\\htdocs\\WM-AVLWebmapsCL\\default_css\\AdministracionNew\\images\\${oldString}_arrowSign_old.png`,
    `C:\\xampp5_6\\htdocs\\WM-AVLWebmapsCL\\default_css\\AdministracionNew\\images\\${oldString}_clientes.png`,
    `C:\\xampp5_6\\htdocs\\WM-AVLWebmapsCL\\default_css\\Bar\\images\\${oldString}_sprite02.png`,
    `C:\\xampp5_6\\htdocs\\WM-AVLWebmapsCL\\default_css\\Tooltips\\Tooltip1.11\\${oldString}_tooltipNotificacion.png`,
    `C:\\xampp5_6\\htdocs\\WM-AVLWebmapsCL\\default_css\\Tooltips\\Tooltip1.11\\${oldString}_tooltipHour.png`,
    `C:\\xampp5_6\\htdocs\\WM-AVLWebmapsCL\\default_css\\Tooltips\\Tooltip1.11\\${oldString}_tooltipChofer20.png`,
    `C:\\xampp5_6\\htdocs\\WM-AVLWebmapsCL\\default_css\\Tooltips\\Tooltip1.11\\${oldString}_tooltipTypeUnity.png`,
    `C:\\xampp5_6\\htdocs\\WM-AVLWebmapsCL\\default_css\\Tooltips\\Tooltip1.11\\${oldString}_tooltipCoordinates.png`,
    `C:\\xampp5_6\\htdocs\\WM-AVLWebmapsCL\\default_css\\Tooltips\\Tooltip1.11\\${oldString}_tooltipDispositivo20.png`,
    `C:\\xampp5_6\\htdocs\\WM-AVLWebmapsCL\\default_css\\Tooltips\\Tooltip1.11\\${oldString}_tooltipPestana2.png`,
    `C:\\xampp5_6\\htdocs\\WM-AVLWebmapsCL\\default_css\\Tooltips\\Tooltip1.11\\${oldString}_ttstartbody.png`,
    `C:\\xampp5_6\\htdocs\\WM-AVLWebmapsCL\\default_css\\Tooltips\\Tooltip1.11\\${oldString}_tooltipCompass.png`,
    `C:\\xampp5_6\\htdocs\\WM-AVLWebmapsCL\\default_css\\Tooltips\\Tooltip1.11\\${oldString}_ttendbody.png`,
    `C:\\xampp5_6\\htdocs\\WM-AVLWebmapsCL\\default_css\\Tooltips\\Tooltip1.11\\${oldString}_tooltipSpeed.png`,
    `C:\\xampp5_6\\htdocs\\WM-AVLWebmapsCL\\default_css\\Tooltips\\Tooltip1.11\\${oldString}_tooltipPestana1.png`,
    `C:\\xampp5_6\\htdocs\\WM-AVLWebmapsCL\\default_css\\Tooltips\\Tooltip1.11\\${oldString}_tooltipTypeUnity20.png`,
    `C:\\xampp5_6\\htdocs\\WM-AVLWebmapsCL\\default_css\\Tooltips\\Tooltip1.11\\${oldString}_tooltipNotificacion20.png`,
    `C:\\xampp5_6\\htdocs\\WM-AVLWebmapsCL\\default_css\\Tooltips\\Tooltip1.11\\${oldString}_tooltipDispositivo.png`,
    `C:\\xampp5_6\\htdocs\\WM-AVLWebmapsCL\\default_css\\Tooltips\\Tooltip1.11\\${oldString}_tooltipHourR.png`,
    `C:\\xampp5_6\\htdocs\\WM-AVLWebmapsCL\\default_css\\Tooltips\\Tooltip1.11\\${oldString}_backTelemetria.png`,
    `C:\\xampp5_6\\htdocs\\WM-AVLWebmapsCL\\default_css\\Tooltips\\Tooltip1.11\\${oldString}_tooltipHome.png`,
    `C:\\xampp5_6\\htdocs\\WM-AVLWebmapsCL\\default_css\\Tooltips\\Tooltip1.11\\${oldString}_atendidoPor.png`,
    `C:\\xampp5_6\\htdocs\\WM-AVLWebmapsCL\\default_css\\Tooltips\\Tooltip1.11\\${oldString}_tooltipChofer.png`,
    `C:\\xampp5_6\\htdocs\\WM-AVLWebmapsCL\\default_css\\Tooltips\\Tooltip1.11\\${oldString}_tooltipPestna5.png`,
    `C:\\xampp5_6\\htdocs\\WM-AVLWebmapsCL\\default_css\\Tooltips\\Tooltip1.11\\${oldString}_tooltipPerson20.png`,
    `C:\\xampp5_6\\htdocs\\WM-AVLWebmapsCL\\default_css\\Tooltips\\Tooltip1.11\\${oldString}_tooltipCoordinates20.png`,
    `C:\\xampp5_6\\htdocs\\WM-AVLWebmapsCL\\default_css\\Tooltips\\Tooltip1.11\\${oldString}_tooltipReport20.png`,
    `C:\\xampp5_6\\htdocs\\WM-AVLWebmapsCL\\default_css\\Tooltips\\Tooltip1.11\\${oldString}_tooltipDistance.png`,
    `C:\\xampp5_6\\htdocs\\WM-AVLWebmapsCL\\default_css\\Tooltips\\Tooltip1.11\\${oldString}_tooltipPestana3.png`,
    `C:\\xampp5_6\\htdocs\\WM-AVLWebmapsCL\\default_css\\Tooltips\\Tooltip1.11\\${oldString}_0.png`,
    `C:\\xampp5_6\\htdocs\\WM-AVLWebmapsCL\\default_css\\HomeNewVisor\\img\\${oldString}_iconOptionEdit.png`,
    `C:\\xampp5_6\\htdocs\\WM-AVLWebmapsCL\\default_css\\HomeNewVisor\\img\\${oldString}_iconOptionVerificacionHover.png`,
    `C:\\xampp5_6\\htdocs\\WM-AVLWebmapsCL\\default_css\\HomeNewVisor\\img\\${oldString}_iconOptionExportarHover.png`,
    `C:\\xampp5_6\\htdocs\\WM-AVLWebmapsCL\\default_css\\HomeNewVisor\\img\\${oldString}_iconOptionMapaHover.png`,
    `C:\\xampp5_6\\htdocs\\WM-AVLWebmapsCL\\default_css\\HomeNewVisor\\img\\${oldString}_iconOptionTelemetriaHover.png`,
    `C:\\xampp5_6\\htdocs\\WM-AVLWebmapsCL\\default_css\\HomeNewVisor\\img\\${oldString}_iconOptionEnComando.png`,
    `C:\\xampp5_6\\htdocs\\WM-AVLWebmapsCL\\default_css\\HomeNewVisor\\img\\${oldString}_iconOptionBuscador.png`,
    `C:\\xampp5_6\\htdocs\\WM-AVLWebmapsCL\\default_css\\HomeNewVisor\\img\\${oldString}_iconOptionEditHover.png`,
    `C:\\xampp5_6\\htdocs\\WM-AVLWebmapsCL\\default_css\\HomeNewVisor\\img\\${oldString}_iconOptionStreetViewHover.png`,
    `C:\\xampp5_6\\htdocs\\WM-AVLWebmapsCL\\default_css\\HomeNewVisor\\img\\${oldString}_iconOptionSeguimientoOff.png`,
    `C:\\xampp5_6\\htdocs\\WM-AVLWebmapsCL\\default_css\\HomeNewVisor\\img\\${oldString}_iconOptionCombustibleHover.png`,
    `C:\\xampp5_6\\htdocs\\WM-AVLWebmapsCL\\default_css\\HomeNewVisor\\img\\${oldString}_iconOptionVerificacion.png`,
    `C:\\xampp5_6\\htdocs\\WM-AVLWebmapsCL\\default_css\\HomeNewVisor\\img\\${oldString}_iconOptionProximidadHover.png`,
    `C:\\xampp5_6\\htdocs\\WM-AVLWebmapsCL\\default_css\\HomeNewVisor\\img\\${oldString}_iconOptionVisible.png`,
    `C:\\xampp5_6\\htdocs\\WM-AVLWebmapsCL\\default_css\\HomeNewVisor\\img\\${oldString}_iconOptionBuscadorHover.png`,
    `C:\\xampp5_6\\htdocs\\WM-AVLWebmapsCL\\default_css\\HomeNewVisor\\img\\${oldString}_iconOptionVideo.png`,
    `C:\\xampp5_6\\htdocs\\WM-AVLWebmapsCL\\default_css\\HomeNewVisor\\img\\${oldString}_iconOptionReportesHover.png`,
    `C:\\xampp5_6\\htdocs\\WM-AVLWebmapsCL\\default_css\\HomeNewVisor\\img\\${oldString}_iconOptionSeguimientoOffHover.png`,
    `C:\\xampp5_6\\htdocs\\WM-AVLWebmapsCL\\default_css\\HomeNewVisor\\img\\${oldString}_iconOptionVideoHover.png`,
    `C:\\xampp5_6\\htdocs\\WM-AVLWebmapsCL\\default_css\\HomeNewVisor\\img\\${oldString}_iconOptionCombustible.png`,
    `C:\\xampp5_6\\htdocs\\WM-AVLWebmapsCL\\default_css\\HomeNewVisor\\img\\${oldString}_iconOptionMonitoreoHover.png`,
    `C:\\xampp5_6\\htdocs\\WM-AVLWebmapsCL\\default_css\\HomeNewVisor\\img\\${oldString}_iconOptionAudioCabinaOffHover.png`,
    `C:\\xampp5_6\\htdocs\\WM-AVLWebmapsCL\\default_css\\HomeNewVisor\\img\\${oldString}_iconOptionBorrar.png`,
    `C:\\xampp5_6\\htdocs\\WM-AVLWebmapsCL\\default_css\\HomeNewVisor\\img\\${oldString}_iconOptionSeguimientoHover.png`,
    `C:\\xampp5_6\\htdocs\\WM-AVLWebmapsCL\\default_css\\HomeNewVisor\\img\\${oldString}_iconOptionRuteoHover.png`,
    `C:\\xampp5_6\\htdocs\\WM-AVLWebmapsCL\\default_css\\HomeNewVisor\\img\\${oldString}_iconOptionEnComandoHover.png`,
    `C:\\xampp5_6\\htdocs\\WM-AVLWebmapsCL\\default_css\\HomeNewVisor\\img\\${oldString}_iconOptionAudioCabinaHover.png`,
    `C:\\xampp5_6\\htdocs\\WM-AVLWebmapsCL\\default_css\\HomeNewVisor\\img\\${oldString}_iconOptionProximidad.png`,
    `C:\\xampp5_6\\htdocs\\WM-AVLWebmapsCL\\default_css\\HomeNewVisor\\img\\${oldString}_iconoOptionPasajeros.png`,
    `C:\\xampp5_6\\htdocs\\WM-AVLWebmapsCL\\default_css\\HomeNewVisor\\img\\${oldString}_iconOptionAudioCabinaOff.png`,
    `C:\\xampp5_6\\htdocs\\WM-AVLWebmapsCL\\default_css\\HomeNewVisor\\img\\${oldString}_iconOptionBorrarHover.png`,
    `C:\\xampp5_6\\htdocs\\WM-AVLWebmapsCL\\default_css\\HomeNewVisor\\img\\${oldString}_iconOptionTelemetria.png`,
    `C:\\xampp5_6\\htdocs\\WM-AVLWebmapsCL\\default_css\\HomeNewVisor\\img\\${oldString}_iconOptionReportes.png`,
    `C:\\xampp5_6\\htdocs\\WM-AVLWebmapsCL\\default_css\\HomeNewVisor\\img\\${oldString}_iconOptionSeguimiento.png`,
    `C:\\xampp5_6\\htdocs\\WM-AVLWebmapsCL\\default_css\\HomeNewVisor\\img\\${oldString}_iconOptionVisibleHover.png`,
    `C:\\xampp5_6\\htdocs\\WM-AVLWebmapsCL\\default_css\\HomeNewVisor\\img\\${oldString}_iconOptionStreetView.png`,
    `C:\\xampp5_6\\htdocs\\WM-AVLWebmapsCL\\default_css\\HomeNewVisor\\img\\${oldString}_iconOptionMapa.png`,
    `C:\\xampp5_6\\htdocs\\WM-AVLWebmapsCL\\default_css\\HomeNewVisor\\img\\${oldString}_iconOptionAudioCabina.png`,
    `C:\\xampp5_6\\htdocs\\WM-AVLWebmapsCL\\default_css\\HomeNewVisor\\img\\${oldString}_iconoOptionPasajerosHover.png`,
    `C:\\xampp5_6\\htdocs\\WM-AVLWebmapsCL\\default_css\\HomeNewVisor\\img\\${oldString}_iconOptionExportar.png`,
    `C:\\xampp5_6\\htdocs\\WM-AVLWebmapsCL\\default_css\\HomeNewVisor\\img\\${oldString}_iconOptionRuteo.png`,
    `C:\\xampp5_6\\htdocs\\WM-AVLWebmapsCL\\default_css\\HomeNewVisor\\img\\${oldString}_iconOptionMonitoreo.png`,
    `C:\\xampp5_6\\htdocs\\WM-AVLWebmapsCL\\js\\WMLPLib-1.0.1\\default_css\\img\\${oldString}_spriteIL6_01.png`,
    `C:\\xampp5_6\\htdocs\\WM-AVLWebmapsCL\\js\\WMLPLib-1.0.1\\gs.motos.smarttelematics.mx_css\\img\\${oldString}_spriteIL6_01.png`,
    `C:\\xampp5_6\\htdocs\\WM-AVLWebmapsCL\\js\\WMLPLib-1.0.1\\flashconnection.webmaps.com.mx_css\\img\\${oldString}_spriteIL6_01.png`,
    `C:\\xampp5_6\\htdocs\\WM-AVLWebmapsCL\\default_css\\AdministracionNew\\images\\${oldString}_adminBorrarIcon.svg`,
    `C:\\xampp5_6\\htdocs\\WM-AVLWebmapsCL\\default_css\\AdministracionNew\\images\\${oldString}_adminEditarIcon.svg`,
    `C:\\xampp5_6\\htdocs\\WM-AVLWebmapsCL\\default_css\\AdministracionNew\\images\\${oldString}_adminMail.svg`,
    `C:\\xampp5_6\\htdocs\\WM-AVLWebmapsCL\\default_css\\AdministracionNew\\images\\${oldString}_adminVisorIcon.svg`,
    `C:\\xampp5_6\\htdocs\\WM-AVLWebmapsCL\\default_css\\AdministracionNew\\images\\${oldString}_passwordAdmin.svg`,
    `C:\\xampp5_6\\htdocs\\WM-AVLWebmapsCL\\default_css\\AdministracionNew\\images\\${oldString}_tools.svg`,
    `C:\\xampp5_6\\htdocs\\WM-AVLWebmapsCL\\default_css\\HomeNewVisor\\img\\${oldString}_iconCheckCliente.svg`,
    `C:\\xampp5_6\\htdocs\\WM-AVLWebmapsCL\\default_css\\HomeNewVisor\\img\\${oldString}_iconCheckFlotilla.svg`,
  ];

  images.forEach((image) => {
    copyAndReplace(image, oldString, newString);
  });
}

// Obteniendo solo los directorios que terminan en '_css'
const cssDirs = fs.readdirSync(cssFolder).filter((file) => file.endsWith("_css"));

function copyFolder(sourceFolder, destFolder) {
  return new Promise((resolve, reject) => {
    fse
      .copy(sourceFolder, destFolder)
      .then(() => {
        console.log(`La carpeta ha sido copiada exitosamente a ${destFolder}`);
        resolve();
      })
      .catch((err) => {
        console.error(err);
        reject(err);
      });
  });
}

inquirer
  .prompt([
    {
      type: "list",
      name: "selectedFolder",
      message: "Elige una carpeta:",
      choices: cssDirs,
    },
    {
      type: "input",
      name: "copyName",
      message: "Introduce el nombre para la copia:",
    },
    {
      type: "input",
      name: "oldHash",
      message: "Introduzca el hash antiguo:",
    },
    {
      type: "input",
      name: "newHash",
      message: "Introduzca el nuevo hash:",
    },
  ])
  .then(async (answers) => {
    const { selectedFolder, copyName, oldHash, newHash } = answers;
    const cssSourceFolder = path.join(cssFolder, selectedFolder);
    const cssDestFolder = path.join(cssFolder, copyName + "_css");
    const configSourceFolder = path.join(configFolder, selectedFolder.replace("_css", "_config"));
    const configDestFolder = path.join(configFolder, copyName + "_config");

    // Copiar las carpetas '_css' y '_config'
    try {
      await Promise.all([copyFolder(cssSourceFolder, cssDestFolder), copyFolder(configSourceFolder, configDestFolder)]);

      const estilosPath = `${configDestFolder}\\estilos.php`;

      async function processLineByLine(estilosPath) {
        const fileStream = fs.createReadStream(estilosPath);

        const rl = readline.createInterface({
          input: fileStream,
          crlfDelay: Infinity,
        });

        let newContent = "";

        for await (const line of rl) {
          let newLine = line;
          const key = line.split("=")[0].trim();

          // Si la línea contiene exactamente una de las claves que queremos modificar
          if (
            key === "$_ESTILO['webmaps']['titulo']" ||
            key === "$_ESTILO['webmaps']['nombreProv']" ||
            key === "$_ESTILO['webmaps']['color_b1']" ||
            key === "$_ESTILO['webmaps']['color_b1_border']" ||
            key === "$_ESTILO['webmaps']['color_b1_tooltip']" ||
            key === "$_ESTILO['webmaps']['color_tabla_selecciona']" ||
            key === "$_ESTILO['webmaps']['color_b3']" ||
            key === "$_ESTILO['webmaps']['color_ruta_mapa']"
          ) {
            const userInput = await askQuestion("Introduce un valor para " + key + ": ");
            newLine = line.replace(/"([^"]*)"/, `"${userInput}"`);
          } else if (key === "$_ESTILO['webmaps']['hash']" || key === "$_ESTILO['webmaps']['hashcxm']") {
            newLine = line.replace(/"([^"]*)"/, `"${newHash}"`);
          }

          newContent += newLine + "\n";
        }

        fs.writeFileSync(estilosPath, newContent);
      }

      function askQuestion(query) {
        const rl = readline.createInterface({
          input: process.stdin,
          output: process.stdout,
        });

        return new Promise((resolve) =>
          rl.question(query, (ans) => {
            rl.close();
            resolve(ans);
          })
        );
      }

      processLineByLine(estilosPath)
        .then(() => {
          main(oldHash, newHash);
        })
        .then(() => {
          exec("python logos.py", (error, stdout, stderr) => {
            if (error) {
              console.error(`An error occurred: ${error}`);
              return;
            }
            console.log(`Python Output: ${stdout}`);
            console.error(`Python Error Output: ${stderr}`);
          });
        })
        .catch((err) => {
          console.error("Error procesando el archivo:", err);
        });
    } catch (err) {
      console.error("Error en la copia de las carpetas:", err);
    }
  });
