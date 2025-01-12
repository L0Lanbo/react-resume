import Mock from 'mockjs';
import excelAPI from './excel';
import loginAPI from './login';
import monitor from './monitor';
import projectAPI from './project.ts';
import remoteSearchAPI from './remoteSearch';
import tableAPI from './table';

// 登录与用户相关
Mock.mock(/\/login/, 'post', loginAPI.login);
Mock.mock(/\/logout/, 'post', loginAPI.logout);
Mock.mock(/\/userInfo/, 'post', loginAPI.userInfo);
Mock.mock(/\/user\/list/, 'get', loginAPI.getUsers);
Mock.mock(/\/user\/delete/, 'post', loginAPI.deleteUser);
Mock.mock(/\/user\/edit/, 'post', loginAPI.editUser);
Mock.mock(/\/user\/validatUserID/, 'post', loginAPI.ValidatUserID);
Mock.mock(/\/user\/add/, 'post', loginAPI.addUser);

// dashboard
Mock.mock(/\/transaction\/list/, 'get', remoteSearchAPI.transactionList);

// excel
Mock.mock(/\/excel\/list/, 'get', excelAPI.excelList);

// table
Mock.mock(/\/table\/list/, 'post', tableAPI.tableList);
Mock.mock(/\/table\/delete/, 'post', tableAPI.deleteItem);
Mock.mock(/\/table\/edit/, 'post', tableAPI.editItem);

// project
Mock.mock(/\/project\/list/, 'post', projectAPI.projectList);
Mock.mock(/\/project\/delete/, 'post', projectAPI.deleteItem);
Mock.mock(/\/project\/edit/, 'post', projectAPI.editItem);

// monitor
Mock.mock(/\/monitor/, 'post', monitor.monitor);

export default Mock;
