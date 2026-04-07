import { fireEvent, render, screen } from '@testing-library/react';
import PostComment from '..';

describe('Teste para o componente PostComment', () => {
    // Teste 1: verifica se o componente renderiza sem erros
    it('Deve renderizar o componente corretamente', () => {
        render(<PostComment />);

        // Procura pelo texto do botão para confirmar que o componente está na tela
        expect(screen.getByText('Comentar')).toBeInTheDocument();
    });

    // Teste 2: simula a inserção de dois comentários e verifica se ambos aparecem na lista
    it('Deve adicionar dois comentários', () => {
        render(<PostComment />);

        // Preenche o campo e clica em "Comentar" para inserir o primeiro comentário
        fireEvent.change(screen.getByTestId('comment-textarea'), {
            target: { value: 'Comentário adicionado via testes' }
        });
        fireEvent.click(screen.getByTestId('comment-button'));

        // Preenche o campo e clica novamente para inserir o segundo comentário
        fireEvent.change(screen.getByTestId('comment-textarea'), {
            target: { value: 'Segundo comentário adicionado via testes' }
        });
        fireEvent.click(screen.getByTestId('comment-button'));

        // getAllByTestId retorna um array com todos os <li data-testid="comment-element">
        // e verifica se há exatamente 2 itens na lista
        expect(screen.getAllByTestId('comment-element')).toHaveLength(2);
    });
});
