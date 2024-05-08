export const usersKeys = {
  getAll: [ 'getUsers', ],
  getById: (id: string) => [ 'getUserById', id, ],
};

export const campainsKeys = {
  getAll: [ 'getCampains', ],
  getById: (id: string) => [ 'getCampainById', id, ],
  getByName: (name: string) => [ 'getCampainById', name, ],
  search: (keyword: string) => [ 'searchCampain', keyword, ],
};

export const sessionsKeys = {
  getAll: [ 'getSessions', ],
  getById: (id: string) => [ 'getSessionById', id, ],
  getByCampainId: (campainId: string) => [ 'getSessionByCampainId', campainId, ],
  getByName: (name: string) => [ 'getSessionById', name, ],
};

export const pcsKeys = {
  getAll: [ 'getPcs', ],
  getById: (id: string) => [ 'getPcById', id, ],
  getByName: (name: string) => [ 'getPcByName', name, ],
  getByLevel: (level: number) => [ 'getPcByLevel', level, ],
};

export const mastersKeys = {
  getAll: [ 'getMasters', ],
  getById: (id: string) => [ 'getMasterById', id, ],
  getByCampainId: (campainId: string) => [ 'getMasterByCampainId', campainId, ],
};
