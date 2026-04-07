import { render, screen } from '@testing-library/react';
import App from './App';

describe('Test <App />', () => {
    it('Expect render correctly', () => {
        // Renderiza o componente raiz da aplicação
        render(<App />);

        // Verifica se o botão de comentar (definido com data-testid no PostComments) está presente
        expect(screen.getByTestId('comment-button')).toBeInTheDocument();
    });
});
