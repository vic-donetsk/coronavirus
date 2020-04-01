<?php

namespace App\Http\Controllers;

class CurrencyController extends Controller
{

    public function index()
    {

        $ch = curl_init("https://obmenka-mariupol.com.ua/");

        // set URL and other appropriate options
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1); // return into a variable
        // grab URL and pass it to variable
        $page = curl_exec($ch);
        // close cURL resource, and free up system resources
        curl_close($ch);

        $tmp_array = explode('currencies__block-link', $page);

        $result_array = [];

        for ($i = 0; $i < 3; $i++) {
            $one_currency = explode('block-num">', $tmp_array[$i + 1]);
            $curses = [];
            for ($j = 0; $j < 2; $j++) {
                $curses[] = substr($one_currency[$j + 1], 0, strpos($one_currency[$j + 1], '<'));
            }
            $result_array[] = $curses;
        }

        return response()->json($result_array);
    }
}
