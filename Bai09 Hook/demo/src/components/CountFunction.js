import React, { useState } from 'react';
 
function Example() {
  // Khai báo 1 biến trạng thái mới đặt tên là "count"
  const [count, setCount] = useState(0);
  return (
    <div>
      <p>Bạn đã click {count} lần</p>
      <button onClick={() => setCount(count + 1)}>
        Click vào tôi
      </button>
    </div>
  );
}
export default Example;