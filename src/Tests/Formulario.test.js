import { mayorDeEdad } from "../components/Formulario";
import Formulario from "../components/Formulario";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

describe('mayorDeEdad', () => {

    test('devuelve boolean', () => {
        expect(typeof mayorDeEdad(5)).toBe('boolean')
    })

    test('18 devuelve true', () => {
        expect(mayorDeEdad(18)).toBe(true)
    })

    test('>18 devuelve true', () => {
        expect(mayorDeEdad(20)).toBe(true)
    })

    test('<18 devuelve false', () => {
        expect(mayorDeEdad(5)).toBe(false)
    })

    test('<0 devuelve null', () => {
        expect(mayorDeEdad(-10)).toBe(null)
    })
});

describe('rendereización', () => {
    let cabecera;
    let img;
    let textF1;
    let textF2;
    let button;
    let headin6;

    beforeEach(() => {
        render(<Formulario />);
        cabecera = screen.getByRole('heading', {level:2})
        img = screen.getByRole('img')
        textF1 = screen.getByLabelText('Nombre')
        textF2 = screen.getByLabelText('Edad')
        button = screen.getByRole('button', {name: 'Enviar'})
    })

    test('se renderizan los componentes', () => {
        expect(cabecera).toBeInTheDocument()
        expect(img).toBeInTheDocument()
        expect(textF1).toBeInTheDocument()
        expect(textF2).toBeInTheDocument()
        expect(button).toBeInTheDocument()
    })

    test('interaccióncon usuario', async () => {
        const user = userEvent.setup()
        await user.type(textF1, 'Óscar')
        await user.type(textF2, '22')
        await user.click(button)
        expect(screen.getByRole('heading', {level: 6})).toBeInTheDocument()
    })
})