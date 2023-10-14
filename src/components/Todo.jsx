/* eslint-disable react/prop-types */
export default function Todo({ todo, removeItem,liked }) {
  return (
      <div>
          <h2>all todos</h2>
          {todo.map((item) => {
              const { id, title } = item;
              return (
                  <div key={id}>
                      <h2>{title}</h2>
                      <button onClick={() => removeItem(id)}>remove</button>
                      <button >edit</button>
                      <button onClick={() => liked(id)}>like</button>
                  </div>
              )
          })}
    </div>
  )
}
