import React from 'react'

const TaskList = ({ tasks, onEdit, onDelete }) => {
  return (
    <div>
      {tasks.length > 0 ? (
        <table className="table table-striped">
          <thead>
            <tr>
              <th>Title</th>
              <th>Description</th>
              <th>Due Date</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {tasks.map((task) => (
              <tr key={task.id}>
                <td>{task.title}</td>
                <td>{task.description}</td>
                <td>{task.dueDate}</td>
                <td>{task.status}</td>
                <td>
                  <button
                    className="btn btn-secondary btn-sm"
                    onClick={() => onEdit(task)}
                  >
                    Edit
                  </button>
                  <button
                    className="btn btn-danger btn-sm ms-2"
                    onClick={() => onDelete(task.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p className="text-center">No tasks available. Add a task!</p>
      )}
    </div>
  );
};

export default TaskList
