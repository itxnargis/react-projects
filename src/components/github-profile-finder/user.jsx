export default function User({ user }) {
    const {
      avatar_url,
      followers,
      following,
      public_repos,
      name,
      login,
      created_at,
    } = user;

    const createdDate = new Date(created_at);
    return (
      <div className="user">
        <div className="user-profile">
          <img src={avatar_url} alt="user" className="avatar" />
        </div>
        <div className="name-container">
          <a href={`https://github.com/${login}`}>{name || login}</a>
          <p>
            User Joined On (
            {`${createdDate.getDate()} ${
              createdDate.toLocaleDateString("en-us", { month: "short" })
            } ${createdDate.getFullYear()}`}
            )
          </p>
        </div>
        <div className="profile-info">
          <div>
            <p>Public Repos</p>
            <p>{public_repos}</p>
          </div>

          <div>
            <p>Followers</p>
            <p>{followers}</p>
          </div>

          <div>
            <p>Following</p>
            <p>{following}</p>
          </div>
        </div>
      </div>
    );
  }
