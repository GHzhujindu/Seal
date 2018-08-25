import Vue from 'vue'
import HelloWorld from '@/components/SanYuan_SystemAdministrator/HelloWorld'
import GSystemManagement from '@/components/SanYuan_SystemAdministrator/GSystemManagement'
import GApproalSetup from '@/components/SanYuan_SystemAdministrator/GApproalSetup'
import GDaylyManage from '@/components/SanYuan_SystemAdministrator/GDaylyManage'
import GJurisdiction from '@/components/SanYuan_SystemAdministrator/GJurisdiction'

import GSystemUnit from '@/components/SanYuan_SystemAdministrator/management/GSystemUnit'
import GSystemUnitList from '@/components/SanYuan_SystemAdministrator/management/GSystemUnitList'
import GSystemUserList from '@/components/SanYuan_SystemAdministrator/management/GSystemUserList'


import GSystemLogStamp from '@/components/SanYuan_SystemAdministrator/log/GSystemLogStamp'
import GSystemLogStampList from '@/components/SanYuan_SystemAdministrator/log/GSystemLogStampList'
import GSystemLogOperatelist from '@/components/SanYuan_SystemAdministrator/log/GSystemLogOperatelist'
import GSystemLogUserList from '@/components/SanYuan_SystemAdministrator/log/GSystemLogUserList'

import GSystemSetInterFace from '@/components/SanYuan_SystemAdministrator/set/GSystemSetInterFace'
import GSystemSetInterFaceList from '@/components/SanYuan_SystemAdministrator/set/GSystemSetInterFaceList'
import GSystemSetPasswordList from '@/components/SanYuan_SystemAdministrator/set/GSystemSetPasswordList'
import GSystemSetPowerList from '@/components/SanYuan_SystemAdministrator/set/GSystemSetPowerList'

import Register from '@/SystemManage/Register'
import component from '@/SystemManage/component'
import Zimg from '@/SystemManage/Zimg'
import Zryqx from '@/SystemManage/Zryqx'
import Zquanxian from '@/SystemManage/Zquanxian'
import Zlogguanli from '@/SystemManage/Zlogguanli'
import GSystemSetup from '@/SystemManage/GSystemSetup'
import Zanquanshenji from '@/SystemManage/Zanquanshenji'
import Zanquanshenjis from '@/SystemManage/Zanquanshenjis'
import ZNewltype from '@/SystemManage/ZNewltype'
import Zsystemlog from '@/SystemManage/Zsystemlog'
import Zanquanlog from '@/SystemManage/Zanquanlog'
import Zzhizhanglog from '@/SystemManage/Zzhizhanglog'
import Zyinkongyilog from '@/SystemManage/Zyinkongyilog'
import ZSystemManagement from '@/SystemManage/ZSystemManagement'

import Router from 'vue-router'
Vue.use(Router)
// GAdminisrator GUnit GDayly
export default new Router({

  routes: [
    {
      path: '/',
      name: 'Register',
      component: Register,
    },
       {
          path: '/HelloWorld',
          name: 'HelloWorld',
          component: HelloWorld,
            children:[
                  {
                    path: 'GSystemUnit',
                    name: 'GSystemUnit',
                    component: GSystemUnit,
                    children:[
                    {
                        path: '',
                        name: 'GSystemUnitList',
                        component: GSystemUnitList  
                    },{
                        path: 'GSystemUnitList',
                        name: 'GSystemUnitList',
                        component: GSystemUnitList  
                    },
                    {
                        path: 'GSystemUserList',
                        name: 'GSystemUserList',
                        component: GSystemUserList  
                    }]
                },
                {
                      path: 'GSystemLogStamp',
                      name: 'GSystemLogStamp',
                      component: GSystemLogStamp,
                        children:[{
                            path: '',
                            name: 'GSystemLogStampList',
                            component: GSystemLogStampList  
                        },{
                            path: 'GSystemLogStampList',
                            name: 'GSystemLogStampList',
                            component: GSystemLogStampList  
                        },
                        {
                            path: 'GSystemLogOperatelist',
                            name: 'GSystemLogOperatelist',
                            component: GSystemLogOperatelist  
                        },
                        {
                            path: 'GSystemLogUserList',
                            name: 'GSystemLogUserList',
                            component: GSystemLogUserList  
                        }]
                  },
{
    path: 'GSystemSetInterFace',
    name: 'GSystemSetInterFace',
    component: GSystemSetInterFace,
    children:[
            {
                path: '',
                name: 'GSystemSetInterFaceList',
                component: GSystemSetInterFaceList  
            },{
                path: 'GSystemSetInterFaceList',
                name: 'GSystemSetInterFaceList',
                component: GSystemSetInterFaceList  
            },
            {
                path: 'GSystemSetPasswordList',
                name: 'GSystemSetPasswordList',
                component: GSystemSetPasswordList  
            },
            {
                path: 'GSystemSetPowerList',
                name: 'GSystemSetPowerList',
                component: GSystemSetPowerList  
            }
    ]
}]
      },
      {
              path: '',
              name: 'GSystemUnit',
              component: GSystemUnit  
          },
      {
          path: '/GJurisdiction',
          name: 'GJurisdiction',
          component: GJurisdiction
      },
      {
      		path: '/GSystemManagement',
	      	name: 'GSystemManagement',
     	 	  component: GSystemManagement
      },
      {
      		path: 'GDaylyManage',
	      	name: 'GDaylyManage',
     	 	component: GDaylyManage
      },
      {
      		path: 'GApproalSetup',
	      	name: 'GApproalSetup',
     	 	component: GApproalSetup
      }
    ,{
      path: '/component',
      name: 'component',
      component: component,
      children : [
        {
          path : "Zimg",
          name : "Zimg",
          component: Zimg,
        },
        {
          path : "Zryqx",
          name : "Zryqx",
          component: Zryqx,
        },
        {
          path : "Zquanxian",
          name : "Zquanxian",
          component: Zquanxian,
        },
        {
          path : "Zlogguanli",
          name : "Zlogguanli",
          component: Zlogguanli,
        },
        {
          path : "ZNewltype",
          name : "ZNewltype",
          component: ZNewltype,
        },
        {
          path : "ZSystemManagement",
          name : "ZSystemManagement",
          component: ZSystemManagement,
        },
        {
          path : "GSystemSetup",
          name : "GSystemSetup",
          component: GSystemSetup,
        }
      ]
    },
    {
      path: '/Zanquanshenji',
      name: 'Zanquanshenji',
      component: Zanquanshenji,
      children :[
        {
          path: 'Zanquanshenjis',
          name: 'Zanquanshenjis',
          component: Zanquanshenjis,
        },
        {
          path: 'Zsystemlog',
          name: 'Zsystemlog',
          component: Zsystemlog,
        },
        {
          path: 'Zanquanlog',
          name: 'Zanquanlog',
          component: Zanquanlog,
        },
        {
          path: 'Zzhizhanglog',
          name: 'Zzhizhanglog',
          component: Zzhizhanglog,
        },
        {
          path: 'Zyinkongyilog',
          name: 'Zyinkongyilog',
          component: Zyinkongyilog,
        }
      ]
    }
  ]
})
