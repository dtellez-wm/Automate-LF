const fs = require('fs');

// List of image paths
const images = [
"C:\\xampp5_6\\htdocs\\WM-AVLWebmapsCL\\default_css\\LIB\\img\\iconosbusquedasA\\7ff97c575adfd4576e131ac12aa879f26065e274_iconosBA_georuta.png",
"C:\\xampp5_6\\htdocs\\WM-AVLWebmapsCL\\default_css\\LIB\\img\\iconosbusquedasA\\7ff97c575adfd4576e131ac12aa879f26065e274_iconosBA_dispositivos.png",
"C:\\xampp5_6\\htdocs\\WM-AVLWebmapsCL\\default_css\\LIB\\img\\iconosbusquedasA\\7ff97c575adfd4576e131ac12aa879f26065e274_iconosBA_tipoevnoti.png",
"C:\\xampp5_6\\htdocs\\WM-AVLWebmapsCL\\default_css\\LIB\\img\\iconosbusquedasA\\7ff97c575adfd4576e131ac12aa879f26065e274_iconosBA_usuarios.png",
"C:\\xampp5_6\\htdocs\\WM-AVLWebmapsCL\\default_css\\LIB\\img\\iconosbusquedasA\\7ff97c575adfd4576e131ac12aa879f26065e274_iconosBA_flotillas.png",
"C:\\xampp5_6\\htdocs\\WM-AVLWebmapsCL\\default_css\\LIB\\img\\iconosbusquedasA\\7ff97c575adfd4576e131ac12aa879f26065e274_iconosBA_nivelusuario.png",
"C:\\xampp5_6\\htdocs\\WM-AVLWebmapsCL\\default_css\\LIB\\img\\iconosbusquedasA\\7ff97c575adfd4576e131ac12aa879f26065e274_iconosBA_protocolo.png",
"C:\\xampp5_6\\htdocs\\WM-AVLWebmapsCL\\default_css\\LIB\\img\\iconosbusquedasA\\7ff97c575adfd4576e131ac12aa879f26065e274_iconosBA_geocerca.png",
"C:\\xampp5_6\\htdocs\\WM-AVLWebmapsCL\\default_css\\LIB\\img\\iconosbusquedasA\\7ff97c575adfd4576e131ac12aa879f26065e274_iconosBA_tipoodometro.png",
"C:\\xampp5_6\\htdocs\\WM-AVLWebmapsCL\\default_css\\LIB\\img\\iconosbusquedasA\\7ff97c575adfd4576e131ac12aa879f26065e274_iconosBA_account.png",
"C:\\xampp5_6\\htdocs\\WM-AVLWebmapsCL\\default_css\\LIB\\img\\iconosbusquedasA\\7ff97c575adfd4576e131ac12aa879f26065e274_iconosBA-28.png",
"C:\\xampp5_6\\htdocs\\WM-AVLWebmapsCL\\default_css\\LIB\\img\\iconosbusquedasA\\7ff97c575adfd4576e131ac12aa879f26065e274_iconosBA_tipovehiculo.png",
"C:\\xampp5_6\\htdocs\\WM-AVLWebmapsCL\\default_css\\LIB\\img\\iconosbusquedasA\\7ff97c575adfd4576e131ac12aa879f26065e274_iconosBA_estancia.png",
"C:\\xampp5_6\\htdocs\\WM-AVLWebmapsCL\\default_css\\LIB\\img\\iconosbusquedasA\\7ff97c575adfd4576e131ac12aa879f26065e274_iconosBA_comandos.png",
"C:\\xampp5_6\\htdocs\\WM-AVLWebmapsCL\\default_css\\LIB\\img\\iconosbusquedasA\\7ff97c575adfd4576e131ac12aa879f26065e274_iconosBA_tiponoti.png",
"C:\\xampp5_6\\htdocs\\WM-AVLWebmapsCL\\default_css\\LIB\\img\\iconosbusquedasA\\7ff97c575adfd4576e131ac12aa879f26065e274_iconosBA_mantenimientos.png",
"C:\\xampp5_6\\htdocs\\WM-AVLWebmapsCL\\default_css\\LIB\\img\\iconosbusquedasA\\7ff97c575adfd4576e131ac12aa879f26065e274_iconosBA_opcionesequipo.png",
"C:\\xampp5_6\\htdocs\\WM-AVLWebmapsCL\\default_css\\LIB\\img\\iconosbusquedasA\\7ff97c575adfd4576e131ac12aa879f26065e274_iconosBA_estatusunidad.png",
"C:\\xampp5_6\\htdocs\\WM-AVLWebmapsCL\\default_css\\LIB\\img\\iconosbusquedasA\\7ff97c575adfd4576e131ac12aa879f26065e274_iconosBA_sensorcombustible.png",
"C:\\xampp5_6\\htdocs\\WM-AVLWebmapsCL\\default_css\\LIB\\img\\iconosbusquedasA\\7ff97c575adfd4576e131ac12aa879f26065e274_iconosBA_tipocombustible.png",
"C:\\xampp5_6\\htdocs\\WM-AVLWebmapsCL\\default_css\\LIB\\img\\iconosbusquedasA\\7ff97c575adfd4576e131ac12aa879f26065e274_input.png",
"C:\\xampp5_6\\htdocs\\WM-AVLWebmapsCL\\default_css\\LIB\\img\\iconosbusquedasA\\7ff97c575adfd4576e131ac12aa879f26065e274_iconosBA_catalogomantenimiento.png",
"C:\\xampp5_6\\htdocs\\WM-AVLWebmapsCL\\default_css\\LIB\\img\\iconosbusquedasA\\7ff97c575adfd4576e131ac12aa879f26065e274_iconosBA-20.png",
"C:\\xampp5_6\\htdocs\\WM-AVLWebmapsCL\\default_css\\LIB\\img\\iconosbusquedasA\\7ff97c575adfd4576e131ac12aa879f26065e274_iconosBA_estatusmantenimiento.png",
"C:\\xampp5_6\\htdocs\\WM-AVLWebmapsCL\\default_css\\LIB\\img\\iconosbusquedasA\\7ff97c575adfd4576e131ac12aa879f26065e274_iconosBA_asignacion.png",
"C:\\xampp5_6\\htdocs\\WM-AVLWebmapsCL\\default_css\\LIB\\img\\iconosbusquedasA\\7ff97c575adfd4576e131ac12aa879f26065e274_iconosBA_perfiles.png",
"C:\\xampp5_6\\htdocs\\WM-AVLWebmapsCL\\default_css\\LIB\\img\\iconosbusquedasA\\7ff97c575adfd4576e131ac12aa879f26065e274_iconosBA_unidades.png",
"C:\\xampp5_6\\htdocs\\WM-AVLWebmapsCL\\default_css\\LIB\\img\\iconosbusquedasA\\7ff97c575adfd4576e131ac12aa879f26065e274_iconosBA_categoriapoi.png",
"C:\\xampp5_6\\htdocs\\WM-AVLWebmapsCL\\default_css\\LIB\\img\\iconosbusquedasA\\7ff97c575adfd4576e131ac12aa879f26065e274_iconosBA_evento.png",
"C:\\xampp5_6\\htdocs\\WM-AVLWebmapsCL\\default_css\\LIB\\img\\iconosbusquedasA\\7ff97c575adfd4576e131ac12aa879f26065e274_iconosBA_tipousuario.png",
"C:\\xampp5_6\\htdocs\\WM-AVLWebmapsCL\\default_css\\LIB\\img\\iconosbusquedasA\\7ff97c575adfd4576e131ac12aa879f26065e274_iconosBA_apn.png",
"C:\\xampp5_6\\htdocs\\WM-AVLWebmapsCL\\default_css\\LIB\\img\\iconosbusquedasA\\7ff97c575adfd4576e131ac12aa879f26065e274_iconosBA_clientes.png",
"C:\\xampp5_6\\htdocs\\WM-AVLWebmapsCL\\default_css\\LIB\\img\\iconosbusquedasA\\7ff97c575adfd4576e131ac12aa879f26065e274_iconosBA_eventos.png",
"C:\\xampp5_6\\htdocs\\WM-AVLWebmapsCL\\default_css\\Home\\images\\7ff97c575adfd4576e131ac12aa879f26065e274_iconclearGenericoBlue.png",
"C:\\xampp5_6\\htdocs\\WM-AVLWebmapsCL\\default_css\\Home\\images\\7ff97c575adfd4576e131ac12aa879f26065e274_hojitaOBDCHECK.png",
"C:\\xampp5_6\\htdocs\\WM-AVLWebmapsCL\\default_css\\Home\\images\\estilos\\7ff97c575adfd4576e131ac12aa879f26065e274_bgRight_.png",
"C:\\xampp5_6\\htdocs\\WM-AVLWebmapsCL\\default_css\\Home\\images\\estilos\\iconografia\\7ff97c575adfd4576e131ac12aa879f26065e274_pReportes.png",
"C:\\xampp5_6\\htdocs\\WM-AVLWebmapsCL\\default_css\\Home\\images\\estilos\\7ff97c575adfd4576e131ac12aa879f26065e274_bgRight.png",
"C:\\xampp5_6\\htdocs\\WM-AVLWebmapsCL\\default_css\\Home\\images\\estilos\\iconografia\\7ff97c575adfd4576e131ac12aa879f26065e274_spriteComandos001.png",
"C:\\xampp5_6\\htdocs\\WM-AVLWebmapsCL\\default_css\\Home\\images\\estilos\\iconografia\\7ff97c575adfd4576e131ac12aa879f26065e274_plantilla.png",
"C:\\xampp5_6\\htdocs\\WM-AVLWebmapsCL\\default_css\\Home\\images\\estilos\\iconografia\\7ff97c575adfd4576e131ac12aa879f26065e274_plantillaHover.png",
"C:\\xampp5_6\\htdocs\\WM-AVLWebmapsCL\\default_css\\Home\\images\\7ff97c575adfd4576e131ac12aa879f26065e274_iconBajar.png",
"C:\\xampp5_6\\htdocs\\WM-AVLWebmapsCL\\default_css\\Home\\images\\7ff97c575adfd4576e131ac12aa879f26065e274_iconBajarHover.png",
"C:\\xampp5_6\\htdocs\\WM-AVLWebmapsCL\\default_css\\Home\\images\\7ff97c575adfd4576e131ac12aa879f26065e274_hojitaOBDCHECKHover.png",
"C:\\xampp5_6\\htdocs\\WM-AVLWebmapsCL\\default_css\\Home\\images\\7ff97c575adfd4576e131ac12aa879f26065e274_iconEditarGenericoBLue.png",
"C:\\xampp5_6\\htdocs\\WM-AVLWebmapsCL\\default_css\\Home\\images\\7ff97c575adfd4576e131ac12aa879f26065e274_gasolinaIcon.png",
"C:\\xampp5_6\\htdocs\\WM-AVLWebmapsCL\\default_css\\Home\\images\\dashboard\\7ff97c575adfd4576e131ac12aa879f26065e274_iconRenovacion.png",
"C:\\xampp5_6\\htdocs\\WM-AVLWebmapsCL\\default_css\\Home\\images\\dashboard\\7ff97c575adfd4576e131ac12aa879f26065e274_colectivos.png",
"C:\\xampp5_6\\htdocs\\WM-AVLWebmapsCL\\default_css\\Home\\images\\dashboard\\7ff97c575adfd4576e131ac12aa879f26065e274_iconVerificacion.png",
"C:\\xampp5_6\\htdocs\\WM-AVLWebmapsCL\\default_css\\Home\\images\\dashboard\\7ff97c575adfd4576e131ac12aa879f26065e274_iconTiempoKilometraje.png",
"C:\\xampp5_6\\htdocs\\WM-AVLWebmapsCL\\default_css\\Home\\images\\dashboard\\7ff97c575adfd4576e131ac12aa879f26065e274_calen-01.png",
"C:\\xampp5_6\\htdocs\\WM-AVLWebmapsCL\\default_css\\Home\\images\\dashboard\\7ff97c575adfd4576e131ac12aa879f26065e274_mantenimientos.png",
"C:\\xampp5_6\\htdocs\\WM-AVLWebmapsCL\\default_css\\Home\\images\\7ff97c575adfd4576e131ac12aa879f26065e274_iconSubir.png",
"C:\\xampp5_6\\htdocs\\WM-AVLWebmapsCL\\default_css\\Home\\images\\7ff97c575adfd4576e131ac12aa879f26065e274_iconSubirHover.png",
"C:\\xampp5_6\\htdocs\\WM-AVLWebmapsCL\\default_css\\AdministracionNew\\images\\7ff97c575adfd4576e131ac12aa879f26065e274_unidades.png",
"C:\\xampp5_6\\htdocs\\WM-AVLWebmapsCL\\default_css\\AdministracionNew\\images\\7ff97c575adfd4576e131ac12aa879f26065e274_passwordAdmin.svg",
"C:\\xampp5_6\\htdocs\\WM-AVLWebmapsCL\\default_css\\AdministracionNew\\images\\7ff97c575adfd4576e131ac12aa879f26065e274_aprovisionamiento.png",
"C:\\xampp5_6\\htdocs\\WM-AVLWebmapsCL\\default_css\\AdministracionNew\\images\\7ff97c575adfd4576e131ac12aa879f26065e274_arrow1-01.png",
"C:\\xampp5_6\\htdocs\\WM-AVLWebmapsCL\\default_css\\AdministracionNew\\images\\7ff97c575adfd4576e131ac12aa879f26065e274_arrow_left-01.png",
"C:\\xampp5_6\\htdocs\\WM-AVLWebmapsCL\\default_css\\AdministracionNew\\images\\7ff97c575adfd4576e131ac12aa879f26065e274_adminEditarIcon.svg",
"C:\\xampp5_6\\htdocs\\WM-AVLWebmapsCL\\default_css\\AdministracionNew\\images\\7ff97c575adfd4576e131ac12aa879f26065e274_comandos.png",
"C:\\xampp5_6\\htdocs\\WM-AVLWebmapsCL\\default_css\\AdministracionNew\\images\\7ff97c575adfd4576e131ac12aa879f26065e274_colectivos.png",
"C:\\xampp5_6\\htdocs\\WM-AVLWebmapsCL\\default_css\\AdministracionNew\\images\\7ff97c575adfd4576e131ac12aa879f26065e274_usuarios.png",
"C:\\xampp5_6\\htdocs\\WM-AVLWebmapsCL\\default_css\\AdministracionNew\\images\\7ff97c575adfd4576e131ac12aa879f26065e274_jasper.png",
"C:\\xampp5_6\\htdocs\\WM-AVLWebmapsCL\\default_css\\AdministracionNew\\images\\7ff97c575adfd4576e131ac12aa879f26065e274_perfiles.png",
"C:\\xampp5_6\\htdocs\\WM-AVLWebmapsCL\\default_css\\AdministracionNew\\images\\7ff97c575adfd4576e131ac12aa879f26065e274_adminMail.svg",
"C:\\xampp5_6\\htdocs\\WM-AVLWebmapsCL\\default_css\\AdministracionNew\\images\\7ff97c575adfd4576e131ac12aa879f26065e274_eventos.png",
"C:\\xampp5_6\\htdocs\\WM-AVLWebmapsCL\\default_css\\AdministracionNew\\images\\7ff97c575adfd4576e131ac12aa879f26065e274_arrowSign.png",
"C:\\xampp5_6\\htdocs\\WM-AVLWebmapsCL\\default_css\\AdministracionNew\\images\\7ff97c575adfd4576e131ac12aa879f26065e274_arrowSignRight.png",
"C:\\xampp5_6\\htdocs\\WM-AVLWebmapsCL\\default_css\\AdministracionNew\\images\\7ff97c575adfd4576e131ac12aa879f26065e274_notificaciones.png",
"C:\\xampp5_6\\htdocs\\WM-AVLWebmapsCL\\default_css\\AdministracionNew\\images\\7ff97c575adfd4576e131ac12aa879f26065e274_adminBorrarIcon.svg",
"C:\\xampp5_6\\htdocs\\WM-AVLWebmapsCL\\default_css\\AdministracionNew\\images\\7ff97c575adfd4576e131ac12aa879f26065e274_arrowSignLeft.png",
"C:\\xampp5_6\\htdocs\\WM-AVLWebmapsCL\\default_css\\AdministracionNew\\images\\7ff97c575adfd4576e131ac12aa879f26065e274_arrow_left-02.png",
"C:\\xampp5_6\\htdocs\\WM-AVLWebmapsCL\\default_css\\AdministracionNew\\images\\7ff97c575adfd4576e131ac12aa879f26065e274_sims.png",
"C:\\xampp5_6\\htdocs\\WM-AVLWebmapsCL\\default_css\\AdministracionNew\\images\\7ff97c575adfd4576e131ac12aa879f26065e274_arrow1-02.png",
"C:\\xampp5_6\\htdocs\\WM-AVLWebmapsCL\\default_css\\AdministracionNew\\images\\7ff97c575adfd4576e131ac12aa879f26065e274_flotillas.png",
"C:\\xampp5_6\\htdocs\\WM-AVLWebmapsCL\\default_css\\AdministracionNew\\images\\7ff97c575adfd4576e131ac12aa879f26065e274_sap_old.png",
"C:\\xampp5_6\\htdocs\\WM-AVLWebmapsCL\\default_css\\AdministracionNew\\images\\7ff97c575adfd4576e131ac12aa879f26065e274_dispositivos.png",
"C:\\xampp5_6\\htdocs\\WM-AVLWebmapsCL\\default_css\\AdministracionNew\\images\\7ff97c575adfd4576e131ac12aa879f26065e274_sap.png",
"C:\\xampp5_6\\htdocs\\WM-AVLWebmapsCL\\default_css\\AdministracionNew\\images\\7ff97c575adfd4576e131ac12aa879f26065e274_mantenimientos.png",
"C:\\xampp5_6\\htdocs\\WM-AVLWebmapsCL\\default_css\\AdministracionNew\\images\\7ff97c575adfd4576e131ac12aa879f26065e274_adminVisorIcon.svg",
"C:\\xampp5_6\\htdocs\\WM-AVLWebmapsCL\\default_css\\AdministracionNew\\images\\7ff97c575adfd4576e131ac12aa879f26065e274_arrowSign_old.png",
"C:\\xampp5_6\\htdocs\\WM-AVLWebmapsCL\\default_css\\AdministracionNew\\images\\7ff97c575adfd4576e131ac12aa879f26065e274_tools.svg",
"C:\\xampp5_6\\htdocs\\WM-AVLWebmapsCL\\default_css\\AdministracionNew\\images\\7ff97c575adfd4576e131ac12aa879f26065e274_clientes.png",
"C:\\xampp5_6\\htdocs\\WM-AVLWebmapsCL\\default_css\\Bar\\images\\7ff97c575adfd4576e131ac12aa879f26065e274_sprite02.png",
"C:\\xampp5_6\\htdocs\\WM-AVLWebmapsCL\\default_css\\Tooltips\\Tooltip1.11\\7ff97c575adfd4576e131ac12aa879f26065e274_tooltipNotificacion.png",
"C:\\xampp5_6\\htdocs\\WM-AVLWebmapsCL\\default_css\\Tooltips\\Tooltip1.11\\7ff97c575adfd4576e131ac12aa879f26065e274_tooltipHour.png",
"C:\\xampp5_6\\htdocs\\WM-AVLWebmapsCL\\default_css\\Tooltips\\Tooltip1.11\\7ff97c575adfd4576e131ac12aa879f26065e274_tooltipChofer20.png",
"C:\\xampp5_6\\htdocs\\WM-AVLWebmapsCL\\default_css\\Tooltips\\Tooltip1.11\\7ff97c575adfd4576e131ac12aa879f26065e274_tooltipTypeUnity.png",
"C:\\xampp5_6\\htdocs\\WM-AVLWebmapsCL\\default_css\\Tooltips\\Tooltip1.11\\7ff97c575adfd4576e131ac12aa879f26065e274_tooltipCoordinates.png",
"C:\\xampp5_6\\htdocs\\WM-AVLWebmapsCL\\default_css\\Tooltips\\Tooltip1.11\\7ff97c575adfd4576e131ac12aa879f26065e274_tooltipDispositivo20.png",
"C:\\xampp5_6\\htdocs\\WM-AVLWebmapsCL\\default_css\\Tooltips\\Tooltip1.11\\7ff97c575adfd4576e131ac12aa879f26065e274_tooltipPestana2.png",
"C:\\xampp5_6\\htdocs\\WM-AVLWebmapsCL\\default_css\\Tooltips\\Tooltip1.11\\7ff97c575adfd4576e131ac12aa879f26065e274_ttstartbody.png",
"C:\\xampp5_6\\htdocs\\WM-AVLWebmapsCL\\default_css\\Tooltips\\Tooltip1.11\\7ff97c575adfd4576e131ac12aa879f26065e274_tooltipCompass.png",
"C:\\xampp5_6\\htdocs\\WM-AVLWebmapsCL\\default_css\\Tooltips\\Tooltip1.11\\7ff97c575adfd4576e131ac12aa879f26065e274_ttendbody.png",
"C:\\xampp5_6\\htdocs\\WM-AVLWebmapsCL\\default_css\\Tooltips\\Tooltip1.11\\7ff97c575adfd4576e131ac12aa879f26065e274_tooltipSpeed.png",
"C:\\xampp5_6\\htdocs\\WM-AVLWebmapsCL\\default_css\\Tooltips\\Tooltip1.11\\7ff97c575adfd4576e131ac12aa879f26065e274_tooltipPestana1.png",
"C:\\xampp5_6\\htdocs\\WM-AVLWebmapsCL\\default_css\\Tooltips\\Tooltip1.11\\7ff97c575adfd4576e131ac12aa879f26065e274_tooltipTypeUnity20.png",
"C:\\xampp5_6\\htdocs\\WM-AVLWebmapsCL\\default_css\\Tooltips\\Tooltip1.11\\7ff97c575adfd4576e131ac12aa879f26065e274_tooltipNotificacion20.png",
"C:\\xampp5_6\\htdocs\\WM-AVLWebmapsCL\\default_css\\Tooltips\\Tooltip1.11\\7ff97c575adfd4576e131ac12aa879f26065e274_tooltipDispositivo.png",
"C:\\xampp5_6\\htdocs\\WM-AVLWebmapsCL\\default_css\\Tooltips\\Tooltip1.11\\7ff97c575adfd4576e131ac12aa879f26065e274_tooltipHourR.png",
"C:\\xampp5_6\\htdocs\\WM-AVLWebmapsCL\\default_css\\Tooltips\\Tooltip1.11\\7ff97c575adfd4576e131ac12aa879f26065e274_backTelemetria.png",
"C:\\xampp5_6\\htdocs\\WM-AVLWebmapsCL\\default_css\\Tooltips\\Tooltip1.11\\7ff97c575adfd4576e131ac12aa879f26065e274_tooltipHome.png",
"C:\\xampp5_6\\htdocs\\WM-AVLWebmapsCL\\default_css\\Tooltips\\Tooltip1.11\\7ff97c575adfd4576e131ac12aa879f26065e274_atendidoPor.png",
"C:\\xampp5_6\\htdocs\\WM-AVLWebmapsCL\\default_css\\Tooltips\\Tooltip1.11\\7ff97c575adfd4576e131ac12aa879f26065e274_tooltipChofer.png",
"C:\\xampp5_6\\htdocs\\WM-AVLWebmapsCL\\default_css\\Tooltips\\Tooltip1.11\\7ff97c575adfd4576e131ac12aa879f26065e274_tooltipPestna5.png",
"C:\\xampp5_6\\htdocs\\WM-AVLWebmapsCL\\default_css\\Tooltips\\Tooltip1.11\\7ff97c575adfd4576e131ac12aa879f26065e274_tooltipPerson20.png",
"C:\\xampp5_6\\htdocs\\WM-AVLWebmapsCL\\default_css\\Tooltips\\Tooltip1.11\\7ff97c575adfd4576e131ac12aa879f26065e274_tooltipCoordinates20.png",
"C:\\xampp5_6\\htdocs\\WM-AVLWebmapsCL\\default_css\\Tooltips\\Tooltip1.11\\7ff97c575adfd4576e131ac12aa879f26065e274_tooltipReport20.png",
"C:\\xampp5_6\\htdocs\\WM-AVLWebmapsCL\\default_css\\Tooltips\\Tooltip1.11\\7ff97c575adfd4576e131ac12aa879f26065e274_tooltipDistance.png",
"C:\\xampp5_6\\htdocs\\WM-AVLWebmapsCL\\default_css\\Tooltips\\Tooltip1.11\\7ff97c575adfd4576e131ac12aa879f26065e274_tooltipPestana3.png",
"C:\\xampp5_6\\htdocs\\WM-AVLWebmapsCL\\default_css\\Tooltips\\Tooltip1.11\\7ff97c575adfd4576e131ac12aa879f26065e274_0.png",
"C:\\xampp5_6\\htdocs\\WM-AVLWebmapsCL\\default_css\\HomeNewVisor\\img\\7ff97c575adfd4576e131ac12aa879f26065e274_iconOptionEdit.png",
"C:\\xampp5_6\\htdocs\\WM-AVLWebmapsCL\\default_css\\HomeNewVisor\\img\\7ff97c575adfd4576e131ac12aa879f26065e274_iconOptionVerificacionHover.png",
"C:\\xampp5_6\\htdocs\\WM-AVLWebmapsCL\\default_css\\HomeNewVisor\\img\\7ff97c575adfd4576e131ac12aa879f26065e274_iconOptionExportarHover.png",
"C:\\xampp5_6\\htdocs\\WM-AVLWebmapsCL\\default_css\\HomeNewVisor\\img\\7ff97c575adfd4576e131ac12aa879f26065e274_iconOptionMapaHover.png",
"C:\\xampp5_6\\htdocs\\WM-AVLWebmapsCL\\default_css\\HomeNewVisor\\img\\7ff97c575adfd4576e131ac12aa879f26065e274_iconOptionTelemetriaHover.png",
"C:\\xampp5_6\\htdocs\\WM-AVLWebmapsCL\\default_css\\HomeNewVisor\\img\\7ff97c575adfd4576e131ac12aa879f26065e274_iconOptionEnComando.png",
"C:\\xampp5_6\\htdocs\\WM-AVLWebmapsCL\\default_css\\HomeNewVisor\\img\\7ff97c575adfd4576e131ac12aa879f26065e274_iconOptionBuscador.png",
"C:\\xampp5_6\\htdocs\\WM-AVLWebmapsCL\\default_css\\HomeNewVisor\\img\\7ff97c575adfd4576e131ac12aa879f26065e274_iconOptionEditHover.png",
"C:\\xampp5_6\\htdocs\\WM-AVLWebmapsCL\\default_css\\HomeNewVisor\\img\\7ff97c575adfd4576e131ac12aa879f26065e274_iconCheckFlotilla.svg",
"C:\\xampp5_6\\htdocs\\WM-AVLWebmapsCL\\default_css\\HomeNewVisor\\img\\7ff97c575adfd4576e131ac12aa879f26065e274_iconOptionStreetViewHover.png",
"C:\\xampp5_6\\htdocs\\WM-AVLWebmapsCL\\default_css\\HomeNewVisor\\img\\7ff97c575adfd4576e131ac12aa879f26065e274_iconOptionSeguimientoOff.png",
"C:\\xampp5_6\\htdocs\\WM-AVLWebmapsCL\\default_css\\HomeNewVisor\\img\\7ff97c575adfd4576e131ac12aa879f26065e274_iconOptionCombustibleHover.png",
"C:\\xampp5_6\\htdocs\\WM-AVLWebmapsCL\\default_css\\HomeNewVisor\\img\\7ff97c575adfd4576e131ac12aa879f26065e274_iconOptionVerificacion.png",
"C:\\xampp5_6\\htdocs\\WM-AVLWebmapsCL\\default_css\\HomeNewVisor\\img\\7ff97c575adfd4576e131ac12aa879f26065e274_iconOptionProximidadHover.png",
"C:\\xampp5_6\\htdocs\\WM-AVLWebmapsCL\\default_css\\HomeNewVisor\\img\\7ff97c575adfd4576e131ac12aa879f26065e274_iconOptionVisible.png",
"C:\\xampp5_6\\htdocs\\WM-AVLWebmapsCL\\default_css\\HomeNewVisor\\img\\7ff97c575adfd4576e131ac12aa879f26065e274_iconOptionBuscadorHover.png",
"C:\\xampp5_6\\htdocs\\WM-AVLWebmapsCL\\default_css\\HomeNewVisor\\img\\7ff97c575adfd4576e131ac12aa879f26065e274_iconOptionVideo.png",
"C:\\xampp5_6\\htdocs\\WM-AVLWebmapsCL\\default_css\\HomeNewVisor\\img\\7ff97c575adfd4576e131ac12aa879f26065e274_iconOptionReportesHover.png",
"C:\\xampp5_6\\htdocs\\WM-AVLWebmapsCL\\default_css\\HomeNewVisor\\img\\7ff97c575adfd4576e131ac12aa879f26065e274_iconOptionSeguimientoOffHover.png",
"C:\\xampp5_6\\htdocs\\WM-AVLWebmapsCL\\default_css\\HomeNewVisor\\img\\7ff97c575adfd4576e131ac12aa879f26065e274_iconOptionVideoHover.png",
"C:\\xampp5_6\\htdocs\\WM-AVLWebmapsCL\\default_css\\HomeNewVisor\\img\\7ff97c575adfd4576e131ac12aa879f26065e274_iconCheckCliente.svg",
"C:\\xampp5_6\\htdocs\\WM-AVLWebmapsCL\\default_css\\HomeNewVisor\\img\\7ff97c575adfd4576e131ac12aa879f26065e274_iconOptionCombustible.png",
"C:\\xampp5_6\\htdocs\\WM-AVLWebmapsCL\\default_css\\HomeNewVisor\\img\\7ff97c575adfd4576e131ac12aa879f26065e274_iconOptionMonitoreoHover.png",
"C:\\xampp5_6\\htdocs\\WM-AVLWebmapsCL\\default_css\\HomeNewVisor\\img\\7ff97c575adfd4576e131ac12aa879f26065e274_iconOptionAudioCabinaOffHover.png",
"C:\\xampp5_6\\htdocs\\WM-AVLWebmapsCL\\default_css\\HomeNewVisor\\img\\7ff97c575adfd4576e131ac12aa879f26065e274_iconOptionBorrar.png",
"C:\\xampp5_6\\htdocs\\WM-AVLWebmapsCL\\default_css\\HomeNewVisor\\img\\7ff97c575adfd4576e131ac12aa879f26065e274_iconOptionSeguimientoHover.png",
"C:\\xampp5_6\\htdocs\\WM-AVLWebmapsCL\\default_css\\HomeNewVisor\\img\\7ff97c575adfd4576e131ac12aa879f26065e274_iconOptionRuteoHover.png",
"C:\\xampp5_6\\htdocs\\WM-AVLWebmapsCL\\default_css\\HomeNewVisor\\img\\7ff97c575adfd4576e131ac12aa879f26065e274_iconOptionEnComandoHover.png",
"C:\\xampp5_6\\htdocs\\WM-AVLWebmapsCL\\default_css\\HomeNewVisor\\img\\7ff97c575adfd4576e131ac12aa879f26065e274_iconOptionAudioCabinaHover.png",
"C:\\xampp5_6\\htdocs\\WM-AVLWebmapsCL\\default_css\\HomeNewVisor\\img\\7ff97c575adfd4576e131ac12aa879f26065e274_iconOptionProximidad.png",
"C:\\xampp5_6\\htdocs\\WM-AVLWebmapsCL\\default_css\\HomeNewVisor\\img\\7ff97c575adfd4576e131ac12aa879f26065e274_iconoOptionPasajeros.png",
"C:\\xampp5_6\\htdocs\\WM-AVLWebmapsCL\\default_css\\HomeNewVisor\\img\\7ff97c575adfd4576e131ac12aa879f26065e274_iconOptionAudioCabinaOff.png",
"C:\\xampp5_6\\htdocs\\WM-AVLWebmapsCL\\default_css\\HomeNewVisor\\img\\7ff97c575adfd4576e131ac12aa879f26065e274_iconOptionBorrarHover.png",
"C:\\xampp5_6\\htdocs\\WM-AVLWebmapsCL\\default_css\\HomeNewVisor\\img\\7ff97c575adfd4576e131ac12aa879f26065e274_iconOptionTelemetria.png",
"C:\\xampp5_6\\htdocs\\WM-AVLWebmapsCL\\default_css\\HomeNewVisor\\img\\7ff97c575adfd4576e131ac12aa879f26065e274_iconOptionReportes.png",
"C:\\xampp5_6\\htdocs\\WM-AVLWebmapsCL\\default_css\\HomeNewVisor\\img\\7ff97c575adfd4576e131ac12aa879f26065e274_iconOptionSeguimiento.png",
"C:\\xampp5_6\\htdocs\\WM-AVLWebmapsCL\\default_css\\HomeNewVisor\\img\\7ff97c575adfd4576e131ac12aa879f26065e274_iconOptionVisibleHover.png",
"C:\\xampp5_6\\htdocs\\WM-AVLWebmapsCL\\default_css\\HomeNewVisor\\img\\7ff97c575adfd4576e131ac12aa879f26065e274_iconOptionStreetView.png",
"C:\\xampp5_6\\htdocs\\WM-AVLWebmapsCL\\default_css\\HomeNewVisor\\img\\7ff97c575adfd4576e131ac12aa879f26065e274_iconOptionMapa.png",
"C:\\xampp5_6\\htdocs\\WM-AVLWebmapsCL\\default_css\\HomeNewVisor\\img\\7ff97c575adfd4576e131ac12aa879f26065e274_iconOptionAudioCabina.png",
"C:\\xampp5_6\\htdocs\\WM-AVLWebmapsCL\\default_css\\HomeNewVisor\\img\\7ff97c575adfd4576e131ac12aa879f26065e274_iconoOptionPasajerosHover.png",
"C:\\xampp5_6\\htdocs\\WM-AVLWebmapsCL\\default_css\\HomeNewVisor\\img\\7ff97c575adfd4576e131ac12aa879f26065e274_iconOptionExportar.png",
"C:\\xampp5_6\\htdocs\\WM-AVLWebmapsCL\\default_css\\HomeNewVisor\\img\\7ff97c575adfd4576e131ac12aa879f26065e274_iconOptionRuteo.png",
"C:\\xampp5_6\\htdocs\\WM-AVLWebmapsCL\\default_css\\HomeNewVisor\\img\\7ff97c575adfd4576e131ac12aa879f26065e274_iconOptionMonitoreo.png",
"C:\\xampp5_6\\htdocs\\WM-AVLWebmapsCL\\js\\WMLPLib-1.0.1\\default_css\\img\\7ff97c575adfd4576e131ac12aa879f26065e274_spriteIL6_01.png",
"C:\\xampp5_6\\htdocs\\WM-AVLWebmapsCL\\js\\WMLPLib-1.0.1\\gs.motos.smarttelematics.mx_css\\img\\7ff97c575adfd4576e131ac12aa879f26065e274_spriteIL6_01.png",
"C:\\xampp5_6\\htdocs\\WM-AVLWebmapsCL\\js\\WMLPLib-1.0.1\\flashconnection.webmaps.com.mx_css\\img\\7ff97c575adfd4576e131ac12aa879f26065e274_spriteIL6_01.png"
];

// Replace the old string with the new string in the image path
const newStr = "20f678463c1dbbb2ff11cf63403b48d3";
const oldStr = "7ff97c575adfd4576e131ac12aa879f26065e274";

// List to store the images that were not found
const notFound = [];

// Iterate through the list of image paths
images.forEach(image => {
    // Get the new image path by replacing the old string with the new string
    const newImage = image.replace(oldStr, newStr);

    // Check if the original image file exists
    if (fs.existsSync(image)) {
        // Read the original image file
        fs.readFile(image, (err, data) => {
            if (err) throw err;
            // Write the new image file
            fs.writeFile(newImage, data, (err) => {
                if (err) throw err;
                console.log(`Copied ${image} to ${newImage}`);
            });
        });
    } else {
        // If the image file is not found, add it to the notFound list
        notFound.push(image);
    }
});

// Create a summary text file
const summary = `Summary:\nTotal images: ${images.length}\nImages not found: ${notFound.length}\n\nList of images not found:\n${notFound.join('\n')}`;
fs.writeFileSync('summary.txt', summary);
console.log('Summary file created successfully');
