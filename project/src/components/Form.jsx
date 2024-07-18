import React, {useEffect} from 'react';
import {
    Button,
    Cascader,
    DatePicker,
    Form,
    Input,
    InputNumber,
    Mentions,
    Select,
    TreeSelect,
} from 'antd';

import '../styles/Form.css';

import dayjs from 'dayjs';
import customParseFormat from 'dayjs/plugin/customParseFormat';

dayjs.extend(customParseFormat);
const dateFormat = 'YYYY-MM-DD';


const {RangePicker} = DatePicker;
const formItemLayout = {
    labelCol: {
        xs: {
            span: 24,
        },
        sm: {
            span: 6,
        },
    },
    wrapperCol: {
        xs: {
            span: 24,
        },
        sm: {
            span: 14,
        },
    },
};

// document.addEventListener('DOMContentLoaded', function () {
//     const form = document.getElementById('myForm-form');
//     form.addEventListener('submit', function (event) {
//         event.preventDefault();
//         const data = new FormData(form);
//         for (const [name, value] of data) {
//             console.log(name, ":", value)
//         }
//         alert("Спасибо, Ваша форма обработана!")
//     });
// });

const MyForm = () => {
    const [form] = Form.useForm();
    console.log(form.getFieldsValue);
    return (
        <div id="myform">
            <h2>Зарегистрироваться на участие в ЛМШ</h2>
            <Form
                {...formItemLayout}
                id="myForm-form"
                action={() => {
                    const data = new FormData(document.getElementById('myForm-form'));
                    for (const [name, value] of data) {
                        console.log(name, ":", value)
                    }
                    alert("Спасибо, Ваша форма обработана!")
                }}
            >
                <Form.Item
                    label="Введите ФИО ребенка"
                    name="Input"
                    rules={[
                        {
                            required: true,
                            message: 'Поле обязательно для заполнения',
                        },
                    ]}
                >
                    <Input/>
                </Form.Item>

                <Form.Item
                    name="email"
                    label="Эл. почта"
                    rules={[
                        {
                            type: 'email',
                            message: 'Введите корректный адрес эп. почты!',
                        },
                        {
                            required: true,
                            message: 'Введите корректный адрес эп. почты!',
                        },
                    ]}
                >
                    <Input/>
                </Form.Item>

                <Form.Item
                    label="Выберите класс"
                    name="Select"
                    rules={[
                        {
                            required: true,
                            message: 'Поле обязательно для заполнения',
                        },
                    ]}
                >
                    <Select id="select-field">
                        <Select.Option value="6">6</Select.Option>
                        <Select.Option value="7">7</Select.Option>
                        <Select.Option value="8">8</Select.Option>
                        <Select.Option value="9">9</Select.Option>
                        <Select.Option value="10">10</Select.Option>
                    </Select>
                </Form.Item>

                <Form.Item
                    label="Выберите букву класса"
                    name="Select3"
                    rules={[
                        {
                            required: true,
                            message: 'Поле обязательно для заполнения',
                        },
                    ]}
                >
                    <Select id="select-field">
                        <Select.Option value="А">А</Select.Option>
                        <Select.Option value="Б">Б</Select.Option>
                        <Select.Option value="В">В</Select.Option>
                        <Select.Option value="Г">Г</Select.Option>
                        <Select.Option value="Д">Д</Select.Option>
                    </Select>
                </Form.Item>

                <Form.Item
                    label="Выберите направление"
                    name="Select2"
                    rules={[
                        {
                            required: true,
                            message: 'Поле обязательно для заполнения',
                        },
                    ]}
                >
                    <Select id="select-field-2">
                        <Select.Option value="inf">Программирование</Select.Option>
                        <Select.Option value="math">Математика</Select.Option>
                        <Select.Option value="phys">Физика</Select.Option>
                    </Select>
                </Form.Item>

                <Form.Item
                    label="Даты отъезда и отъезда"
                    name="RangePicker"
                    rules={[
                        {
                            required: true,
                            message: 'Поле обязательно для заполнения',
                        },
                    ]}
                >
                    <RangePicker defaultValue={[dayjs('2024-07-03', dateFormat), dayjs('2024-07-20', dateFormat)]}/>
                </Form.Item>

                <Form.Item
                    wrapperCol={{
                        offset: 6,
                        span: 16,
                    }}
                >
                    <Button type="primary" htmlType="submit" onClick={console.log(123)}>
                        Отправить
                    </Button>
                </Form.Item>
            </Form>
        </div>
    );
};

export default MyForm;
