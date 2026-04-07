import { render, screen } from '@testing-library/react';
import Post from '..';

describe('Test <Post />', () => {
    it('Expect render correctly', () => {
        // Renderiza o Post passando uma URL de imagem e um texto como children
        render(
            <Post imageUrl="https://via.placeholder.com/200x200">
                Teste
            </Post>
        );

        // Verifica se o texto passado como children aparece na tela
        expect(screen.getByText('Teste')).toBeInTheDocument();
    });
});
