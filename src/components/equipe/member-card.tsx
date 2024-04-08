import { Member } from "@/cms/types";
import { UserIcon } from "../icons/user";
import Image from "next/image";
import { isAvatar } from "@/cms/typeguards";
import { StarIcon } from "../icons/star";

type MemberCardProps = {
  member: Member;
};

export function MemberCard({ member }: MemberCardProps) {
  return (
    <li className="relative w-full py-8 px-5 lg:px-8 card flex flex-nowrap lg:flex-col lg:justify-center gap-4 items-center">
      <div className="relative">
        <div className="flex justify-center items-center w-16 lg:w-24 lg:h-24 h-16 rounded-full bg-neutral-100 border-2 border-white overflow-hidden">
          {isAvatar(member.avatar) ? (
            <Image
              src={member.avatar.url!}
              className="w-full h-full"
              width={0}
              height={0}
              sizes="100vw"
              alt={member.lastname}
            />
          ) : (
            <UserIcon className="w-full h-full fill-neutral-200 translate-y-4" />
          )}
        </div>
        <ul className="absolute bottom-0 left-0 flex gap-0.5 justify-center items-center w-full translate-y-0..5">
          {Array.from({ length: Number(member.rank) }).map((_, i) => (
            <StarIcon key={i} className="w-3 h-3 fill-navy-700" />
          ))}
        </ul>
      </div>
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
