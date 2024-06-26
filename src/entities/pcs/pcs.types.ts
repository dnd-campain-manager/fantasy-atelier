import {
  Campain, Class, Pc, PcClass, User
} from '@prisma/client';

export interface ExtendedPc extends Pc {
  totalLevel: number;
  User: User;
  Campain: Campain;
  Class: Class[];
}

export interface PcPages {
  pcs: ExtendedPc[];
  total: number,
  page: number,
}

export interface CreatePcDto {
  userId: string;
  campainId: string;
  name: string;
  age?: number;
  organization?: string;
  story?: string;
  url: string;
  className1: PcClass;
  level1: number;
  className2?: PcClass;
  level2?: number;
  exp?: number;
}

export interface UpdatePcDto {
  name?: string;
  age?: number;
  organization?: string;
  story?: string;
  url?: string;
  className1?: PcClass;
  level1?: number;
  className2?: PcClass;
  level2?: number;
  exp?: number;
  classId1?: string;
  classId2?: string;
}
