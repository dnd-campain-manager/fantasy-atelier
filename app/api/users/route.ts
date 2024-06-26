import { NextRequest, NextResponse } from 'next/server';
import { DataHash, Db } from '@/src/utils';
import { CreateUserDto } from '@/src/entities';

export async function GET() {
  const users = await Db.users().findMany({
    include: {
      Master: {
        include: {
          Session: true,
          Campain: true,
        },
      },
      Pc: {
        include: {
          Campain: true,
          Class: true,
        },
      },
    },
  });

  const newUsers = users.map((user) => {
    const pcs = user.Pc;

    const newPcs = pcs.map((pc) => {
      const level1 = pc.Class[0].level;
      const level2 = pc.Class[1] ? pc.Class[1].level : 0;

      return {
        ...pc,
        totalLevel: level1 + level2,
      };
    });

    return {
      ...user,
      Pc: newPcs,
    };
  });

  return NextResponse.json({
    data: newUsers,
    message: 'ok',
  }, {
    status: 200,
  });
}

export async function POST(req: NextRequest) {
  const {
    name, password, userRole, userType,
  }: CreateUserDto = await req.json();

  const findUser = await Db.users().findFirst({
    where: {
      name,
    },
    include: {
      Master: {
        include: {
          Session: true,
          Campain: true,
        },
      },
      Pc: {
        include: {
          Campain: true,
        },
      },
    },
  });

  if (findUser) {
    return NextResponse.json({
      data: null,
      message: '이미 존재하는 플레이어입니다.',
    }, {
      status: 409,
    });
  }

  const newUser = await Db.users().create({
    data: {
      name,
      userType,
      userRole,
    },
  });

  const hashedPassword = await DataHash.hashData(password);

  await Db.auth().create({
    data: {
      userId: newUser.id,
      password: hashedPassword,
    },
  });

  return NextResponse.json({
    data: newUser,
    message: 'ok',
  }, {
    status: 201,
  });
}
