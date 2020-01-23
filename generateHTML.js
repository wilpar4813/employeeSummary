function generateHTML(data) {
    return `
<!DOCTYPE html > <html lang="en">
    <head>
        <meta charset="UTF-8"/>
        <meta content="width=device-width, initial-scale=1.0" name="viewport"/>
        <meta content="ie=edge" http-equiv="X-UA-Compatible"/>
        <link href="https://use.fontawesome.com/releases/v5.8.1/css/all.css" rel="stylesheet"/>
        <link href="https://fonts.googleapis.com/css?family=BioRhyme|Cabin&display=swap" rel="stylesheet">
        <title>Document</title>
    </head>
        <style>
            @page {
            margin : 0;
        }
            *,
                       *::after,
                       *::before {
            box-sizing : border-box;
        }
        .center {
          
        }
        #mainHeader{
            display: block;
            background-color: #E64A58;
            text-align: center;
            color:white;
            margin: auto;
            width: 100%;
            padding: 10px;
            height:30%;
        }
            html, body {
            padding : 0;
            margin : 0;
        }
            .wrapper {
            background-color : white;
            padding-top : 100 px;
        }
            body {
            background-color : white;
            -webkit-print-color-adjust : exact !important;
            font-family : 'Cabin',
            sans-serif;
        }
            main {
            background-color : #E9EDEE;
            height : auto;
            padding-top : 30 px;
        }
            h1, h2, h3, h4, h5, h6 {
               
            font-family : Arial,
            serif;
            margin : 0;
        }
            h1 {
            font-size : 3e m;
        }
            h2 {
            font-size : 2.5e m;
        }
            h3 {
            font-size : 2e m;
        }
            h4 {
            font-size : 1.5e m;
        }
            h5 {
            font-size : 1.3e m;
        }
            h6 {
            font-size : 1.2e m;
        }
            hr{
            border : 2 px solid blue;
        }

            #name, #title{
                float:left;
            }

            #idDetail, #location{
                border:1px solid #E8E8E8 !important;
                padding: 10px;
                margin: 20px 10px 20px 10px;
                background-color: white;
            }

            .container {
            padding : 50 px;
            padding-left : 100 px;
            padding-right : 100 px;
        }

            .row {
            display : flex;
            flex-wrap : wrap;
            justify-content : space-between;
            margin-top : 20 px;
            margin-bottom : 20 px;
        }
        #nameTitleRow{
            display:block;
            background-color: #147BF3;
            padding:10px;
            color:white;
        }

            .card {

            border-radius : 6 px;
            border : 5 px solid black;
            background-color : gray;
            color : black;
            padding : 20 px;
            margin : 20 px;
        }
        #idBox{
            background-color: #F6F7F8;
            margin-left: auto;
            margin-right: auto;
            width:100%;
        }
        #employeeCard{
            background-color: #F6F7F8;
            border: 1px solid;
            padding: 0px;
            box-shadow: 7px 7px 7px grey;
            margin:20px;
        }
            .col {
            flex : 1;
            text-align : center;
        }
            @media print {
            body {
                zoom : .75;
            }
        } 
        </style>

        <body>
            <header class="container" id = "mainHeader">

                <h1>My Team</h1>

            </header>
            <div class="wrapper">

                <div class="row" id="teamLineUp">
                    <div class='col card' id="employeeCard">
                        <div class="row" id="nameTitleRow">
                            <div class="row" id="nameRow">
                                <h2 id="name">Tripp</h2>
                            </div>
                            <br>
                            <div class="row" id="titleRow">
                                <h3 id="title">Engineer</h3>
                            </div>
                        </div>
                        <div class="row" id="idRow">
                            <div id="idBox">
                                <div class="row" id="idDetail">ID:
                                </div>
                                <div class="row" id="idDetail">Email:
                                </div>
                                <div class="row" id="location">Office Number:
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </body>
</html>`
}
module.exports = generateHTML;
