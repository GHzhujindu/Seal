import Vue from 'vue'
const _import = require("@common/import.js");
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


// import Register from '@/ThreeJobs/index/Register'
// import component from '@/ThreeJobs/SafetyManagement/component/component'
// import Zimg from '@/ThreeJobs/SafetyManagement/component/Zimg'
// import Zryqx from '@/ThreeJobs/SafetyManagement/SystemManagement/Zryqx'
// import Zquanxian from '@/ThreeJobs/SafetyManagement/SystemManagement/Zquanxian'
// import Zlogguanli from '@/ThreeJobs/SafetyManagement/LogManagement/Zlogguanli'
// import GSystemSetup from '@/ThreeJobs/SafetyManagement/ApprovalManagement/GSystemSetup'
// import Zanquanshenji from '@/ThreeJobs/SafetyAuditor/Zanquanshenji'
// import Zanquanshenjis from '@/ThreeJobs/SafetyAuditor/Zanquanshenjis'
// import ZNewltype from '@/ThreeJobs/SafetyManagement/ApprovalManagement/ZNewltype'
// import Zsystemlog from '@/ThreeJobs/SafetyAuditor/Zsystemlog'
// import Zanquanlog from '@/ThreeJobs/SafetyAuditor/Zanquanlog'
// import Zzhizhanglog from '@/ThreeJobs/SafetyAuditor/Zzhizhanglog'
// import Zyinkongyilog from '@/ThreeJobs/SafetyAuditor/Zyinkongyilog'
// import ZSystemManagement from '@/ThreeJobs/SafetyManagement/SystemManagement/ZSystemManagement'


import Router from 'vue-router'
Vue.use(Router)
// GAdminisrator GUnit GDayly
export default new Router({

  routes: [
    {
      path: '/',
      name: 'Register',
      component: _import("index/Register"),
    },
    {
      path: '/HelloWorld',
      name: 'HelloWorld',
      component: HelloWorld,
      children: [
        {
          path: 'GSystemUnit',
          name: 'GSystemUnit',
          component: GSystemUnit,
          children: [
            {
              path: '',
              name: 'GSystemUnitList',
              component: GSystemUnitList
            }, {
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
          children: [{
            path: '',
            name: 'GSystemLogStampList',
            component: GSystemLogStampList
          }, {
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
          children: [
            {
              path: '',
              name: 'GSystemSetInterFaceList',
              component: GSystemSetInterFaceList
            }, {
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
    , {
      path: '/component',
      name: 'component',
      component: _import("SafetyManagement/component/component"),
      children: [
        {
          path: "Zimg",
          name: "Zimg",
          component: _import("SafetyManagement/component/Zimg"),
        },
        {
          path: "Zryqx",
          name: "Zryqx",
          component: _import("SafetyManagement/SystemManagement/Zryqx"),
        },
        {
          path: "Zquanxian",
          name: "Zquanxian",
          component: _import("SafetyManagement/SystemManagement/Zquanxian"),
        },
        {
          path: "Zlogguanli",
          name: "Zlogguanli",
          component: _import("SafetyManagement/LogManagement/Zlogguanli"),
        },
        {
          path: "ZNewltype",
          name: "ZNewltype",
          component: _import("SafetyManagement/ApprovalManagement/ZNewltype"),
        },
        {
          path: "ZSystemManagement",
          name: "ZSystemManagement",
          component: _import("SafetyManagement/SystemManagement/ZSystemManagement"),
        },
        {
          path: "GSystemSetup",
          name: "GSystemSetup",
          component: _import("SafetyManagement/ApprovalManagement/GSystemSetup"),
        }
      ]
    },
    {
      path: '/Zanquanshenji',
      name: 'Zanquanshenji',
      component: _import("SafetyAuditor/Zanquanshenji"),
      children: [
        {
          path: 'Zanquanshenjis',
          name: 'Zanquanshenjis',
          component: _import("SafetyAuditor/Zanquanshenjis"),
        },
        {
          path: 'Zsystemlog',
          name: 'Zsystemlog',
          component: _import("SafetyAuditor/Zsystemlog"),
        },
        {
          path: 'Zanquanlog',
          name: 'Zanquanlog',
          component: _import("SafetyAuditor/Zanquanlog"),
        },
        {
          path: 'Zzhizhanglog',
          name: 'Zzhizhanglog',
          component: _import("SafetyAuditor/Zzhizhanglog"),
        },
        {
          path: 'Zyinkongyilog',
          name: 'Zyinkongyilog',
          component: _import("SafetyAuditor/Zyinkongyilog"),
        }
      ]
    }
  ]
})
