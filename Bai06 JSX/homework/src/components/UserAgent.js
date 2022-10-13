function UserAgent() {
    console.log(navigator);
  return (
    <div className="user-agent">
        <h2> Browser's Detail: {navigator.userAgent}</h2>
    </div>
  );
}

export default UserAgent;
