import {getKindeServerSession} from '@kinde-oss/kinde-auth-nextjs/server';

export async function UserInfo() {

    const {getUser} = getKindeServerSession();
    const userinfo = await getUser();


    return(
        <div>
            {userinfo?.email}
        </div>
    );
}