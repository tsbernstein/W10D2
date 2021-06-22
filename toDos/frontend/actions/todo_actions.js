
export const receiveTodos = todos => {
    return {
        type: RECEIVE_TODOS,
        todos,
    };
};

export const recieveTodo = todo => {
    return{
        type: RECIEVE_TODO,
        todo,
    };
};

export const RECIEVE_TODOS = 'RECIEVE_TODOS';
export const RECIEVE_TODO = 'RECEIVE_TODO';