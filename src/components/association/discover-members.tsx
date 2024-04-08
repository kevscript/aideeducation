import { getMembers } from "@/cms/api";
import { isAvatar } from "@/cms/typeguards";
import Image from "next/image";
import Link from "next/link";
import { UserIcon } from "../icons/user";

export async function DiscoverMembers() {
  const members = (await getMembers()).sort((a, b) =>
    Number(a.rank) > Number(b.rank) ? 1 : -1
  );

  return (
    <Link
      href={"/nous/equipe"}
      className="max-w-96 w-full transition hover:bg-white bg-neutral-50 cursor-pointer card-shadow rounded-tr-2xl rounded-bl-2xl p-8 gap-4 flex flex-col h-fit"
    >
      <div className="relative flex flex-nowrap">
        <div className="relative z-20 w-16 h-16 rounded-full bg-gradient-to-bl from-navy-700 to-navy-900 border-2 border-white overflow-hidden shadow-inner flex justify-center items-center">
          {isAvatar(members[0].avatar) ? (
            <Image
              src={members[0].avatar.url!}
              className="w-full h-full"
              width={0}
              height={0}
              sizes="100vw"
              alt={members[0].lastname}
            />
          ) : (
            <UserIcon className="w-4/6 fill-white translate-y-2" />
          )}
        </div>
        <div className="absolute top-0 z-10 left-[40px] w-16 h-16 rounded-full bg-gradient-to-bl from-navy-700 to-navy-900 border-2 border-white overflow-hidden shadow-inner flex justify-center items-center">
          {isAvatar(members[0].avatar) ? (
            <Image
              src={members[0].avatar.url!}
              className="w-full h-full"
              width={0}
              height={0}
              sizes="100vw"
              alt={members[0].lastname}
            />
          ) : (
            <UserIcon className="w-4/6 fill-white translate-y-2" />
          )}
        </div>
        <div className="absolute top-0 z-0 left-[80px] w-16 h-16 rounded-full bg-gradient-to-bl from-navy-700 to-navy-900 border-2 border-white overflow-hidden shadow-inner flex justify-center items-center">
          {isAvatar(members[0].avatar) ? (
            <Image
              src={members[0].avatar.url!}
              className="w-full h-full"
              width={0}
              height={0}
              sizes="100vw"
              alt={members[0].lastname}
            />
          ) : (
            <UserIcon className="w-4/6 fill-white translate-y-2" />
          )}
        </div>
      </div>

      <p className="shrink-0 text-navy-900">{`Découvrez nos ${members.length} bénévoles.`}</p>
    </Link>
  );
}
