const { useEffect } = require("react");
const { useDispatch, useSelector } = require("react-redux");

const dispatch = useDispatch();
const user = useSelector((state) => state.user.user);

useEffect(() => {
  return fetch(`/api/orders/${user.id}`)
    .then((res) => res.json())
    .then((data) => {
      dispatch(addOrder(data));
    });
}, [user.id]);
