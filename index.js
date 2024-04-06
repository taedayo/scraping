const PORT = 8000;
const express = require("express");

const axios = require("axios");
const cheerio = require("cheerio");

const URL = "https://www.amazon.co.jp/gp/browse.html?node=689132&ref_=nav_em_sapc_pcgam_0_2_13_17";

axios(URL)
    .then((resp) => {
        const htmlParser = resp.data;
        //console.log(htmlParser);
        const $ = cheerio.load(htmlParser);

        $(".a-spacing-base", htmlParser).each(function() { 
            const price = $(this).find(".a-price-whole").text();
            const txt = $(this).find(".a-text-normal").text();
            console.log(txt);
            console.log(price);
         })
    })

const app = express();
app.listen(PORT, console.log("run!!!"));
