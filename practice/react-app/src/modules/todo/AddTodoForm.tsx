import React, { Dispatch, FC, FormEvent, useState } from 'react';
import { ToDo } from './ToDo';
import { REDUCER_ACTIONS } from './ToDoContainer';

const AddToDoForm: FC<{dispatch: Dispatch<REDUCER_ACTIONS>}> = ({dispatch}) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    // Assuming you have a function to generate a unique ID for each todo
    const newToDo: ToDo = {
      id: Date.now().toString(), // Example ID generation
      title: title,
      description: description,
      done: false,
    };
    dispatch({
        type: 'ADD_TODO',
        payload: newToDo
    })
    // Here you would typically send the newToDo to your state management or backend
    setTitle('');
    setDescription('');
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto my-8">
      <div className="mb-4">
        <label htmlFor="title" className="block text-sm font-medium text-gray-700">
          Add todo
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
      <div className="mb-4">
        <label htmlFor="description" className="block text-sm font-medium text-gray-700">
          Description
        </label>
        <textarea
          id="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          rows={4}
          className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
          required
        ></textarea>
      </div>
      <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700">
        Add
      </button>
    </form>
  );
};

export default AddToDoForm;