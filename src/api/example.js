import request from '#/utils/request';

export function getExample() {
  return request({
    url: `/something/api/path`,
  })
    .then((result) => result)
    .catch(() => []);
}

export function postExample() {
  return request({
    method: 'POST',
    url: `/something/api/path`,
    data: {},
  })
    .then((result) => result)
    .catch(() => []);
}
