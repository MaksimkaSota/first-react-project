import { Paginator } from '../common/Paginator/Paginator';
import { User } from './User/User';

export const Users = ({
                        users,
                        page,
                        count,
                        totalCount,
                        subscriptionsId,
                        onFollow,
                        onUnfollow,
                        onSetCurrentPage
                      }) => {
  return (
    <div>
      <Paginator page={page} count={count} totalCount={totalCount} onSetCurrentPage={onSetCurrentPage} />
      <div>
        {users.map((user, index) => <User key={index}
                                          user={user}
                                          subscriptionsId={subscriptionsId}
                                          onFollow={onFollow}
                                          onUnfollow={onUnfollow} />
        )}
      </div>
    </div>
  );
};
