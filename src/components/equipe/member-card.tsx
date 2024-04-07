import { Member } from "@/cms/types";

type MemberCardProps = {
  member: Member;
};

export function MemberCard({ member }: MemberCardProps) {
  return (
    <li className="relative w-full py-8 px-5 lg:px-8 card flex flex-nowrap lg:flex-col lg:justify-center gap-4 items-center">
      <div className="w-16 lg:w-24 lg:h-24 h-16 rounded-full bg-neutral-100 border-2 border-white"></div>
      <div className="flex flex-col flex-1 lg:items-center">
        <span className="font-bold font-display lg:text-lg text-navy-900">
          {member.firstname + " " + member.lastname}
        </span>
        <span className="tracking-tighter text-sm lg:text-base lg:text-center lg:text-balance">
          {member.role}
        </span>
        <span className="hidden lg:inline text-sm font-mono mt-4 tracking-tighter text-neutral-500">
          {new Date(member.joinedAt).toLocaleDateString("fr-FR")}
        </span>
      </div>
    </li>
  );
}
