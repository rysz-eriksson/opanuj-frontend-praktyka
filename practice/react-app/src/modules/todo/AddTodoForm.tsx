import React, { Dispatch, FC, FormEvent, useState } from 'react';
import { ToDo } from './ToDo';
import { REDUCER_ACTIONS } from './todosReducer';

const AddToDoForm: FC<{dispatch: Dispatch<REDUCER_ACTIONS>}> = ({dispatch}) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const newToDo: ToDo = {
      id: Date.now().toString(),
      title: title,
      description: description,
      done: false,
    };
    dispatch({
        type: 'ADD_TODO',
        payload: newToDo
    })
    setTitle('');
    setDescription('');
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto my-8 flex-1">
      <h2>Add Todo</h2>
      <div className="mb-4 w-px-400 flex justify-between gap-2">
        <label htmlFor="title" className="text-sm font-medium text-gray-700">
          Title
        </label>
        <input
          type="text"
          id="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
          required
        />
      </div>
      <div className="mb-4 w-p-400 flex justify-between gap-2">
        <label htmlFor="description" className="text-sm font-medium text-gray-700">
          Description
        </label>
        <input
          type="text"
          id="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
          required
        ></input>
      </div>
      <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700">
        Add
      </button>
    </form>
  );
};

export default AddToDoForm;