// service: 실제 backend와 소통하는 로직
import { client, urlFor } from "./sanity";

export async function getAllMembers() {
  // *[_type == "member"]: member라는 name을 가진 schema 몽땅 가져오기
  // urlFor(member.photo): sanity의 `image`는 이상한 객체를 리턴, 예쁘게 url로 만들어줘야 <Image/>에서 사용가능
  return client
    .fetch(
      `*[_type == "member"] | order(_createdAt asc){ ..., "id":_id, "createdAt":_createdAt}`
    )
    .then((members) =>
      members.map((member) => ({
        ...member,

        photo: urlFor(member.photo),
      }))
    );
}
