// import { Notification, TeamInviteNotification } from "../types/dtos";
// import { GetNotificationsResponse } from "../types/responses";
// import { fetcherAuth } from "./fetcher";

// export async function getNotifications() {
//     const res = await fetcherAuth<GetNotificationsResponse<TeamInviteNotification>>(
//         '/register/user/notifications',
//         {
//             method: 'GET',
//             headers: {
//                 'Content-Type': 'application/json',
//             },
//         },
//     );

//     return res;
// }