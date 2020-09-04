import React from 'react';
import { Todos } from './todos';
import { Todo } from './todos.interface';

export default { title: 'Todos' };

const todo: Todo = { title: 'Todo 1' };

export const primary = () => (
  <Todos todos={[todo]} />
);

// Körs genom kommandot 'yarn storybook'