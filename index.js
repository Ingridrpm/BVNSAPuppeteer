const fs = require('fs')
const path = require('path')
fs.rmSync(path.join(process.cwd(), 'Descargas'), { recursive: true, force: true });
fs.mkdirSync(path.join(process.cwd(), 'Descargas'));
fs.mkdirSync(path.join(process.cwd(), './Descargas/R1'));
fs.mkdirSync(path.join(process.cwd(), './Descargas/R2'));
fs.mkdirSync(path.join(process.cwd(), './Descargas/R3'));
fs.mkdirSync(path.join(process.cwd(), './Descargas/R4'));
fs.mkdirSync(path.join(process.cwd(), './Descargas/R5'));
fs.mkdirSync(path.join(process.cwd(), './Descargas/R6'));
fs.mkdirSync(path.join(process.cwd(), './Descargas/R7'));
fs.mkdirSync(path.join(process.cwd(), './Descargas/R8'));
fs.mkdirSync(path.join(process.cwd(), './Descargas/R9'));
fs.mkdirSync(path.join(process.cwd(), './Descargas/R10'));


(async () => {
    const puppeteer = require('puppeteer')
    const browser = await puppeteer.launch(/*{ headless: false }*/)
    const page = await browser.newPage()

    const navigationPromise = page.waitForNavigation()

    // Descarga Comportamiento Tasa Overnight
    console.log("Descarga Comportamiento Tasa Overnight")
    console.log("INICIO")

    await page.goto('http://www.bvnsa.com.gt/bvnsa/informes_tasa_overnight.php')

    await page.setViewport({ width: 1536, height: 714 })
    await page.waitForSelector('#boton1')
    await page.click('#boton1')


    await page.waitForSelector('#card-data')

    await navigationPromise

    await page.screenshot({ path: './Descargas/R1/screenshot_1.png', fullPage: true })

    const e2 = await page.$('#card-data')
    await e2.screenshot({ path: './Descargas/R1/screenshot_2.png' })

    const element1 = await page.$('#grafica')
    await element1.screenshot({ path: './Descargas/R1/grafica.png' })

    const element2 = await page.$('#grafica2')
    await element2.screenshot({ path: './Descargas/R1/grafica2.png' })

    const element3 = await page.$('#grafica3')
    await element3.screenshot({ path: './Descargas/R1/grafica3.png' })
    console.log("FIN")

    // Reportos
    var dir = path.join(process.cwd(), 'Descargas/R2')
    var client = await page.target().createCDPSession()
    await client.send('Page.setDownloadBehavior', {
        behavior: 'allow',
        downloadPath: dir,
    })
    console.log("Descarga Reportos")
    console.log("INICIO")
    await page.goto('http://www.bvnsa.com.gt/bvnsa/informes_reportos.php')

    await page.waitForSelector('.container > .card > #forma1 > .form-group > .d-flex')
    await page.click('.container > .card > #forma1 > .form-group > .d-flex')

    await page.waitForSelector('#boton1')
    await page.click('#boton1')

    await page.waitForSelector('.container > .card > #panelito > #tabla_publicos_wrapper > .dataTables_scroll')
    await page.click('.container > .card > #panelito > #tabla_publicos_wrapper > .dataTables_scroll')

    await page.waitForSelector('#panelito > #tabla_publicos_wrapper > .dt-buttons > .buttons-excel > span')
    await page.click('#panelito > #tabla_publicos_wrapper > .dt-buttons > .buttons-excel > span')

    await page.waitForSelector('#panelito > #tabla_privados_wrapper > .dt-buttons > .buttons-excel > span')
    await page.click('#panelito > #tabla_privados_wrapper > .dt-buttons > .buttons-excel > span')
    console.log("FIN")

    // Resumen Reportos
    dir = path.join(process.cwd(), 'Descargas/R3')
    client = await page.target().createCDPSession()
    await client.send('Page.setDownloadBehavior', {
        behavior: 'allow',
        downloadPath: dir,
    })
    console.log("Descarga Resumen Reportos")
    console.log("INICIO")
    await page.goto('http://www.bvnsa.com.gt/bvnsa/informes_resumen_reportos.php')

    await page.waitForSelector('#fechaInformeDel')
    await page.click('#fechaInformeDel')

    await page.waitForSelector('.card > #forma1 > .form-group > .col-md-4 > .input-daterange')
    await page.click('.card > #forma1 > .form-group > .col-md-4 > .input-daterange')

    await page.waitForSelector('#boton1')
    await page.click('#boton1')

    await page.waitForSelector('#panelito > #tabla_datos_wrapper > .dt-buttons > .buttons-excel > span')
    await page.click('#panelito > #tabla_datos_wrapper > .dt-buttons > .buttons-excel > span')
    console.log("FIN")

    //Mercado Primario - Licitaciones (Instrumentos Públicos)
    console.log("Descarga Mercado Primario - Licitaciones (Instrumentos Públicos")
    console.log("INICIO")
    await page.goto('http://www.bvnsa.com.gt/bvnsa/informes_primario_licitaciones.php')
    await page.setViewport({ width: 1536, height: 714 })


    await page.waitForSelector('#select2-tituloInforme-container')
    await page.click('#select2-tituloInforme-container')
    await page.click('.select2-container--open > .selection > .select2-selection > .select2-selection__arrow > b')

    await page.waitForSelector('#select2-Param_Graficar-container')
    await page.click('#select2-Param_Graficar-container')
    await page.click('.select2-container--open > .selection > .select2-selection > .select2-selection__arrow > b')

    await page.waitForSelector('#vencimiento')
    await page.click('#vencimiento')

    await page.select('#vencimiento', '20/04/2023')

    await page.waitForSelector('#vencimiento')
    await page.click('#vencimiento')

    await page.waitForSelector('#boton1')
    await page.click('#boton1')

    await page.waitForSelector('#panel-data')
    //await page.waitForSelector('#grafica')

    await page.screenshot({ path: './Descargas/R4/screenshot.png', fullPage: true })
    console.log("FIN")


    //Curva de Rendimiento 
    console.log("Curva de Rendimiento ")
    console.log("INICIO")

    await page.goto('http://www.bvnsa.com.gt/bvnsa/informes_curva_rendimiento.php')

    dir = path.join(process.cwd(), 'Descargas/R5')
    client = await page.target().createCDPSession()
    await client.send('Page.setDownloadBehavior', {
        behavior: 'allow',
        downloadPath: dir,
    })

    await page.waitForSelector('#fechaInformeDel')
    await page.click('#fechaInformeDel')

    await page.waitForSelector('#boton1')
    await page.click('#boton1')

    await page.waitForSelector('.card-body > #tabla_rendimiento_wrapper > .dt-buttons > .buttons-excel > span')
    await page.click('.card-body > #tabla_rendimiento_wrapper > .dt-buttons > .buttons-excel > span')
    console.log("FIN")


    //Informe diario
    console.log("Descarga Informe diario")
    console.log("INICIO")

    await page.goto("http://www.bvnsa.com.gt/bvnsa/informes_informe_diario.php")

    await page.waitForSelector('.container > .card > #forma1 > .form-group > .col-md-3')
    await page.click('.container > .card > #forma1 > .form-group > .col-md-3')

    await page.waitForSelector('#boton1')
    await page.click('#boton1')

    const fs = require('fs')
    await page.waitForSelector("#tabla_informe")
    const tabla_informe = await page.$eval('#tabla_informe', element => element.outerHTML);
    var tableToCsv = require('node-table-to-csv');
    var csv_informe = tableToCsv(tabla_informe);
    fs.writeFile("./Descargas/R6/tabla_informe.csv", csv_informe, function (err) {
        if (err) return console.log(err);
    });

    console.log("FIN")

    //Títulos en Oferta
    console.log("Descarga Títulos en Oferta")
    console.log("INICIO")

    await page.goto('http://www.bvnsa.com.gt/bvnsa/informes_titulos_oferta.php')
    await page.setViewport({ width: 1536, height: 714 })

    await page.screenshot({ path: 'screenshot_1.png', fullPage: true })

    const element22 = await page.$('#panelito')
    await element22.screenshot({ path: 'screenshot_2.png' })

    await page.waitForSelector('#panelito')
    dir = path.join(process.cwd(), 'Descargas/R7')
    client = await page.target().createCDPSession()
    await client.send('Page.setDownloadBehavior', {
        behavior: 'allow',
        downloadPath: dir,
    })

    await page.setViewport({ width: 1536, height: 714 })

    await page.waitForSelector('#panelito > #tabla_publicos_wrapper > .mb-1 > .dt-buttons > .buttons-excel')
    await page.click('#panelito > #tabla_publicos_wrapper > .mb-1 > .dt-buttons > .buttons-excel')

    await page.waitForSelector('.card > #panelito > #tabla_acciones_wrapper > .dt-buttons > .buttons-excel')
    await page.click('.card > #panelito > #tabla_acciones_wrapper > .dt-buttons > .buttons-excel')
    console.log("FIN")

    // Volumen Negociado
    console.log("Descarga Volumen Negociado")
    console.log("INICIO")
    page.goto('http://www.bvnsa.com.gt/bvnsa/informes_volumen_negociado.php')

    await page.waitForSelector("#tabla_quetzales")

    const tabla_quetzales = await page.$eval('#tabla_quetzales', element => element.outerHTML);
    
    var csv_quetzales = tableToCsv(tabla_quetzales);
    
    fs.writeFile("./Descargas/R8/tabla_quetzales.csv", csv_quetzales, function (err) {
        if (err) return console.log(err);
    });

    const tabla_dolares = await page.$eval('#tabla_dolares', element => element.outerHTML);
    var csv_dolares = tableToCsv(tabla_dolares);
    fs.writeFile("./Descargas/R8/tabla_dolares.csv", csv_dolares, function (err) {
        if (err) return console.log(err);
    });

    console.log("FIN")


    // Informe SINEDI

    console.log("Descarga Informe SINEDI")
    console.log("INICIO")
    page.goto('http://www.bvnsa.com.gt/bvnsa/informes_sinedi.php')
    dir = path.join(process.cwd(), 'Descargas/R9')
    client = await page.target().createCDPSession()
    await client.send('Page.setDownloadBehavior', {
        behavior: 'allow',
        downloadPath: dir,
    })

    await page.waitForSelector('.col-md-10 > #tabla_sinedi_wrapper > .dt-buttons > .buttons-excel > span')
    await page.click('.col-md-10 > #tabla_sinedi_wrapper > .dt-buttons > .buttons-excel > span')
    console.log("FIN")


    // Buzón Bursátil

    console.log("Descarga Buzón Bursátil")
    console.log("INICIO")
    //const fs = require('fs')
    const request = require("request-promise-native");
    //Descargar pdf http://www.bvnsa.com.gt/WPaginas/buzon/buzonbursatil_2022.08.pdf
    let url = "http://www.bvnsa.com.gt/WPaginas/buzon/buzonbursatil_2022.08.pdf";
    const http = require('http')

    // Download the file
    http
        .get(url, res => {
            // Open file in local filesystem
            const file = fs.createWriteStream(`./Descargas/R10/buzonbursatil_2022.08.pdf`)

            // Write data into local file
            res.pipe(file)

            // Close the file
            file.on('finish', () => {
                file.close()
                console.log(`File downloaded!`)
            })
        })
        .on('error', err => {
            console.log('Error: ', err.message)
        })

    await navigationPromise
    await browser.close()
})();

