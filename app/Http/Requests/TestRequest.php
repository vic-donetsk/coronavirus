<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class TestRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'name' => ['required', 'min:2'],
            'surname' => ['required', 'min:2'],
            'email' => ['required',
                function ($attribute, $value, $fail) {
                    if ((!filter_var($value, FILTER_VALIDATE_EMAIL))) {
                        $fail(ucfirst($attribute).' has incorrect format');
                    }
                },
            ],
        ];
    }

    public function messages()
    {
        return [
            '*.required' => 'Это поле должно быть заполнено',

        ];
    }

    public function attributes()
    {
        return [
            'name' => "Поле 'Имя' ",
            'surname' => "Поле 'Фамилия' ",
        ];
    }
}
