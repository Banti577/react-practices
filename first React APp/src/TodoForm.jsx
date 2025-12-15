import React, { useState } from 'react';

function TodoForm({ addTodo }) {
  // State to manage all form inputs
  const [formData, setFormData] = useState({
    taskName: '',
    assigneeEmail: '',
    priority: 'low', // Default value for radio
    duration: 0,
    isComplete: false, // Default value for checkbox
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    // Handle checkboxes differently from other input types
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.taskName.trim() === '') return;

    // Pass the form data to the parent component's addTodo function
    addTodo({ ...formData, id: Date.now() });

    // Reset form after submission
    setFormData({
      taskName: '',
      assigneeEmail: '',
      priority: 'low',
      duration: 0,
      isComplete: false,
    });
  };

  return (
    <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '10px', maxWidth: '300px', margin: '20px auto' }}>
      <div>
        <label>
          Task Name (Text):
          <input
            type="text"
            name="taskName"
            value={formData.taskName}
            onChange={handleChange}
            placeholder="Enter task name"
            required
            style={{ marginLeft: '10px' }}
          />
        </label>
      </div>

      <div>
        <label>
          Assignee Email (Email):
          <input
            type="email"
            name="assigneeEmail"
            value={formData.assigneeEmail}
            onChange={handleChange}
            placeholder="Enter email"
            style={{ marginLeft: '10px' }}
          />
        </label>
      </div>

      <div>
        <label>
          Duration (Number in hours):
          <input
            type="number"
            name="duration"
            value={formData.duration}
            onChange={handleChange}
            min="0"
            style={{ marginLeft: '10px' }}
          />
        </label>
      </div>

      <div style={{ display: 'flex', gap: '10px' }}>
        Priority (Radio):
        <label>
          <input
            type="radio"
            name="priority"
            value="low"
            checked={formData.priority === 'low'}
            onChange={handleChange}
          />
          Low
        </label>
        <label>
          <input
            type="radio"
            name="priority"
            value="medium"
            checked={formData.priority === 'medium'}
            onChange={handleChange}
          />
          Medium
        </label>
        <label>
          <input
            type="radio"
            name="priority"
            value="high"
            checked={formData.priority === 'high'}
            onChange={handleChange}
          />
          High
        </label>
      </div>

      <div>
        <label>
          <input
            type="checkbox"
            name="isComplete"
            checked={formData.isComplete}
            onChange={handleChange}
          />
          Mark as Complete (Checkbox)
        </label>
      </div>

      <button type="submit">Add Todo</button>
    </form>
  );
}

export default TodoForm;
