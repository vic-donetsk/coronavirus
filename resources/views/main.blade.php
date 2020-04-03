<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <meta name="csrf-token" content="{{ csrf_token() }}">

        <title>Карантин - INFO</title>

        <link rel="shortcut icon" href="/images/favicon.png" type="image/png">

        <link href="https://fonts.googleapis.com/css?family=Nunito:100,200,300,500,600,700,900" rel="stylesheet">
        <link rel="stylesheet" href="{{ mix('css/app.css') }}">

        <style>
            html * {
                margin: 0;
                padding: 0;
                box-sizing: border-box;
                font-family: 'Nunito', sans-serif;
            }
        </style>

    </head>



    <body>
    <div style="position:absolute;visibility: hidden;
            opacity: 0;display: none">
        @include('sprite')
    </div>
    <div id="app">
        <main>
            <router-view></router-view>
        </main>
    </div>

    <script src="{{ mix('js/app.js') }}"></script>

    </body>
</html>
