define({ "api": [
  {
    "type": "get",
    "url": "/api/permissions/",
    "title": "List all permissions and their repartition",
    "group": "Permissions",
    "version": "0.0.0",
    "filename": "./routes/permissions.js",
    "groupTitle": "Permissions",
    "name": "GetApiPermissions",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "permission_name",
            "description": "<p>Permission name</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "permission_level",
            "description": "<p>Permission level</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "is_deprecated",
            "description": "<p>Permission state</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "financial_impact",
            "description": "<p>Permission has an impact on financial aspect</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "privacy_impact",
            "description": "<p>Permission has an impact on privacy aspect</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "system_impact",
            "description": "<p>Permission has an impact on system aspect</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "battery_impact",
            "description": "<p>Permission has an impact on battery aspect</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "location_impact",
            "description": "<p>Permission accesses information about location</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\"permission_name\":\"string_1\",\n      \"permission_level\":\"string_2\",\n      \"is_deprecated\":false,\n      \"financial_impact\":false,\n      \"privacy_impact\":false,\n      \"system_impact\":false,\n      \"battery_impact\":false,\n      \"location_impact\":false}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "post",
    "url": "/api/permissions/basicscan",
    "title": "Make the Basic Scan of all the sent packages",
    "group": "Permissions",
    "version": "0.0.0",
    "filename": "./routes/permissions.js",
    "groupTitle": "Permissions",
    "name": "PostApiPermissionsBasicscan",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Object[]",
            "optional": false,
            "field": "Packages",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "Packages.AppName",
            "description": "<p>Application Name</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "Packages.PackageName",
            "description": "<p>PackageName</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "Packages.VersionCode",
            "description": "<p>Actual version code</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "Packages.VersionName",
            "description": "<p>Actual version name</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "Packages.FirstInstallTime",
            "description": "<p>First install date</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "Packages.LastUpdateTime",
            "description": "<p>Last update date</p>"
          },
          {
            "group": "Parameter",
            "type": "String[]",
            "optional": false,
            "field": "Packages.Permissions",
            "description": "<p>Permissions'list</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "  {\"Packages\": [\n       {\n            \"AppName\":\"string_0\",\n            \"PackageName\": \"string_1\",\n            \"VersionCode\": 0,\n            \"VersionName\": \"string_2\",\n            \"FirstInstallTime\": 0,\n            \"LastUpdateTime\":0,\n            \"Permissions\": [\"string_3\", \"string_4\"]\n        },\n   {\n            \"AppName\": \"string_5\",\n            \"PackageName\": \"string_6\",\n            \"VersionCode\": 0,\n            \"VersionName\": \"string_7\",\n            \"FirstInstallTime\": 0,\n            \"LastUpdateTime\":0,\n            \"Permissions\": [\"string_8\",\"string_9\"]\n        }\n    ]\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "status",
            "description": "<p>Status</p>"
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "result",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "result.AppName",
            "description": "<p>Application Name</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "result.DeprecatedPermissionsNumber",
            "description": "<p>Number of Deprecated Permissions</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "result.FinancialImpactPermissionsNumber",
            "description": "<p>Number of Permissions with a financial impact</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "result.PrivacyImpactPermissionsNumber",
            "description": "<p>Number of Permissions with a privacy impact</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "result.SystemImpactPermissionsNumber",
            "description": "<p>Number of Permissions with a system impact</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "result.BatteryImpactPermissionsNumber",
            "description": "<p>Number of Permissions with a battery impact</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "result.LocationImpactPermissionsNumber",
            "description": "<p>Number of Permissions with a location impact</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\"status\":200,\n     \"result\":[\n             {\"AppName\":\"string_0\",\n             \"DeprecatedPermissionsNumber\":0,\n             \"FinancialImpactPermissionsNumber\":0,\n             \"PrivacyImpactPermissionsNumber\":0,\n             \"SystemImpactPermissionsNumber\":0,\n             \"BatteryImpactPermissionsNumber\":0,\n             \"LocationImpactPermissionsNumber\":0\n             },\n             {\"AppName\":\"string_1\",\n             \"DeprecatedPermissionsNumber\":0,\n             \"FinancialImpactPermissionsNumber\":0,\n             \"PrivacyImpactPermissionsNumber\":0,\n             \"SystemImpactPermissionsNumber\":0,\n             \"BatteryImpactPermissionsNumber\":0,\n             \"LocationImpactPermissionsNumber\":0}\n             ]}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "Number",
            "optional": false,
            "field": "status",
            "description": "<p>ErrorStatus</p>"
          },
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "error",
            "description": "<p>Verbose error</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"status\": 0,\n  \"error\": \"string_error\"\n}",
          "type": "json"
        }
      ]
    }
  }
] });
