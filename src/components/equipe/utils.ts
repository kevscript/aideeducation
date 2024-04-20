import { Member } from "@/cms/types";

export function sortMembersByDepartment(members: Member[]) {
  const membersByDepartment: Record<string, Member[]> = {};

  members.forEach((member) => {
    if (membersByDepartment[member.department]) {
      membersByDepartment[member.department].push(member);
    } else {
      membersByDepartment[member.department] = [member];
    }
  });

  return membersByDepartment;
}
