import { useToast } from "@/components/ui/use-toast";
import { useGetUsers } from "@/lib/react-query/queryAndMutations";
import Loader from "@/components/shared/Loader";
import UserCard from "@/components/shared/UserCard";
import { useUserContext } from "@/context/AuthContext";

const AllUsers = () => {
  const { toast } = useToast();
  const { user } = useUserContext()

  const { data: creators, isLoading, isError: isErrorCreators } = useGetUsers();

  if (isErrorCreators) {
    toast({ title: "Something went wrong." });
    
    return;
  }

  return (
    <div className="common-container">
      <div className="user-container">
        <h2 className="h3-bold md:h2-bold text-left w-full">All Users</h2>
        {isLoading && !creators ? (
          <Loader />
        ) : (
          <ul className="user-grid">
            {creators?.documents.length === 0 ? (
              <p>No users found</p>
            ) : (
              creators?.documents.map((creator) => (
                creator?.$id !== user.id && (
                  <li key={creator?.$id} className="flex-1 min-w-[200px] w-full">
                    <UserCard user={creator} />
                  </li>
      )
    ))
  )}
          </ul>
        )}
      </div>
    </div>
  );
};

export default AllUsers;