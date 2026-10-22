export default {
    "scalars": [
        1,
        4,
        6,
        8,
        10,
        11,
        18,
        20,
        22,
        25,
        27,
        34,
        46,
        54,
        57,
        63,
        75,
        79,
        80,
        82,
        87,
        92,
        98,
        103,
        109,
        112,
        113,
        114,
        115,
        123,
        125,
        139,
        143,
        145,
        147,
        192,
        193,
        220,
        224,
        225,
        227,
        237,
        243,
        247,
        251,
        254,
        261,
        276,
        278,
        288,
        295,
        296,
        297,
        308,
        310,
        327,
        328,
        329,
        330,
        331,
        332,
        334,
        335,
        336,
        339,
        340,
        342,
        343,
        346,
        348,
        352,
        356,
        365,
        372,
        373,
        374,
        377,
        381,
        382,
        387,
        391,
        414,
        416,
        417,
        420,
        425,
        437,
        439,
        443,
        448,
        465,
        477,
        478,
        480,
        504,
        506,
        508,
        570,
        590,
        597,
        599,
        603,
        614,
        620,
        621,
        623,
        624,
        626,
        627,
        628,
        631,
        632,
        637,
        639,
        642,
        647,
        648,
        649,
        652,
        653
    ],
    "types": {
        "ActivateWorkspaceInput": {
            "displayName": [
                1
            ],
            "__typename": [
                1
            ]
        },
        "String": {},
        "AddQuerySubscriptionInput": {
            "eventStreamId": [
                1
            ],
            "operationSignature": [
                295
            ],
            "queryId": [
                1
            ],
            "__typename": [
                1
            ]
        },
        "Agent": {
            "applicationId": [
                504
            ],
            "createdAt": [
                193
            ],
            "description": [
                1
            ],
            "icon": [
                1
            ],
            "id": [
                504
            ],
            "isCustom": [
                4
            ],
            "isSystem": [
                4
            ],
            "label": [
                1
            ],
            "modelConfiguration": [
                295
            ],
            "modelId": [
                1
            ],
            "name": [
                1
            ],
            "prompt": [
                1
            ],
            "responseFormat": [
                295
            ],
            "roleId": [
                504
            ],
            "triggers": [
                295
            ],
            "updatedAt": [
                193
            ],
            "__typename": [
                1
            ]
        },
        "Boolean": {},
        "AgentChatEvent": {
            "event": [
                295
            ],
            "threadId": [
                1
            ],
            "__typename": [
                1
            ]
        },
        "AgentChatInboxAction": {},
        "AgentChatOpenThreadsSummary": {
            "hasUnreadAssignedThread": [
                4
            ],
            "hasUnreadMentionThread": [
                4
            ],
            "hasUnreadOpenThread": [
                4
            ],
            "needsInputThreadCount": [
                8
            ],
            "openThreadCount": [
                8
            ],
            "__typename": [
                1
            ]
        },
        "Int": {},
        "AgentChatThread": {
            "contextWindowTokens": [
                8
            ],
            "conversationSize": [
                8
            ],
            "createdAt": [
                193
            ],
            "deletedAt": [
                193
            ],
            "id": [
                10
            ],
            "title": [
                1
            ],
            "totalCacheReadTokens": [
                8
            ],
            "totalInputCredits": [
                11
            ],
            "totalInputTokens": [
                8
            ],
            "totalOutputCredits": [
                11
            ],
            "totalOutputTokens": [
                8
            ],
            "updatedAt": [
                193
            ],
            "__typename": [
                1
            ]
        },
        "ID": {},
        "Float": {},
        "AgentChatThreadParticipant": {
            "archivedAt": [
                193
            ],
            "id": [
                504
            ],
            "isSubscribed": [
                4
            ],
            "lastMentionedAt": [
                193
            ],
            "lastReadAt": [
                193
            ],
            "snoozedUntil": [
                193
            ],
            "threadId": [
                504
            ],
            "updatedAt": [
                193
            ],
            "__typename": [
                1
            ]
        },
        "AgentIdInput": {
            "id": [
                504
            ],
            "__typename": [
                1
            ]
        },
        "AgentMessage": {
            "agentId": [
                504
            ],
            "createdAt": [
                193
            ],
            "id": [
                504
            ],
            "parts": [
                15
            ],
            "processedAt": [
                193
            ],
            "reactions": [
                16
            ],
            "role": [
                1
            ],
            "senderUserWorkspaceId": [
                504
            ],
            "senderWorkspaceMemberId": [
                504
            ],
            "status": [
                1
            ],
            "threadId": [
                504
            ],
            "turnId": [
                504
            ],
            "__typename": [
                1
            ]
        },
        "AgentMessagePart": {
            "createdAt": [
                193
            ],
            "errorMessage": [
                1
            ],
            "fileFilename": [
                1
            ],
            "fileId": [
                504
            ],
            "fileMediaType": [
                1
            ],
            "fileUrl": [
                1
            ],
            "id": [
                504
            ],
            "messageId": [
                504
            ],
            "orderIndex": [
                8
            ],
            "providerExecuted": [
                4
            ],
            "providerMetadata": [
                295
            ],
            "reasoningContent": [
                1
            ],
            "sourceDocumentFilename": [
                1
            ],
            "sourceDocumentMediaType": [
                1
            ],
            "sourceDocumentSourceId": [
                1
            ],
            "sourceDocumentTitle": [
                1
            ],
            "sourceUrlSourceId": [
                1
            ],
            "sourceUrlTitle": [
                1
            ],
            "sourceUrlUrl": [
                1
            ],
            "state": [
                1
            ],
            "textContent": [
                1
            ],
            "toolCallId": [
                1
            ],
            "toolInput": [
                295
            ],
            "toolName": [
                1
            ],
            "toolOutput": [
                295
            ],
            "type": [
                1
            ],
            "__typename": [
                1
            ]
        },
        "AgentMessageReactionSummary": {
            "agentIds": [
                504
            ],
            "emoji": [
                1
            ],
            "hasAssistantReacted": [
                4
            ],
            "workspaceMemberIds": [
                504
            ],
            "__typename": [
                1
            ]
        },
        "AgentRun": {
            "createdAt": [
                193
            ],
            "creatorName": [
                1
            ],
            "creatorSource": [
                1
            ],
            "credits": [
                11
            ],
            "endedAt": [
                193
            ],
            "errorMessage": [
                1
            ],
            "id": [
                504
            ],
            "input": [
                1
            ],
            "inputTokens": [
                8
            ],
            "modelId": [
                1
            ],
            "outputTokens": [
                8
            ],
            "reply": [
                1
            ],
            "startedAt": [
                193
            ],
            "status": [
                18
            ],
            "threadId": [
                504
            ],
            "threadTitle": [
                1
            ],
            "toolNames": [
                1
            ],
            "__typename": [
                1
            ]
        },
        "AgentTurnStatus": {},
        "AggregateChartConfiguration": {
            "aggregateFieldMetadataId": [
                504
            ],
            "aggregateOperation": [
                20
            ],
            "configurationType": [
                631
            ],
            "description": [
                1
            ],
            "displayDataLabel": [
                4
            ],
            "filter": [
                295
            ],
            "firstDayOfTheWeek": [
                8
            ],
            "label": [
                1
            ],
            "numberFormat": [
                125
            ],
            "prefix": [
                1
            ],
            "ratioAggregateConfig": [
                409
            ],
            "suffix": [
                1
            ],
            "timezone": [
                1
            ],
            "__typename": [
                1
            ]
        },
        "AggregateOperations": {},
        "AiChatUsage": {
            "consumedValue": [
                82
            ],
            "kind": [
                1
            ],
            "limitValue": [
                82
            ],
            "periodEnd": [
                193
            ],
            "__typename": [
                1
            ]
        },
        "AiModelTier": {},
        "AiSystemPromptPreview": {
            "estimatedTokenCount": [
                8
            ],
            "sections": [
                24
            ],
            "__typename": [
                1
            ]
        },
        "AiSystemPromptSection": {
            "content": [
                1
            ],
            "estimatedTokenCount": [
                8
            ],
            "title": [
                1
            ],
            "__typename": [
                1
            ]
        },
        "AllMetadataName": {},
        "Analytics": {
            "success": [
                4
            ],
            "__typename": [
                1
            ]
        },
        "AnalyticsType": {},
        "ApiConfig": {
            "mutationMaximumAffectedRecords": [
                11
            ],
            "__typename": [
                1
            ]
        },
        "ApiKey": {
            "createdAt": [
                193
            ],
            "expiresAt": [
                193
            ],
            "id": [
                504
            ],
            "name": [
                1
            ],
            "revokedAt": [
                193
            ],
            "role": [
                431
            ],
            "updatedAt": [
                193
            ],
            "__typename": [
                1
            ]
        },
        "ApiKeyForRole": {
            "expiresAt": [
                193
            ],
            "id": [
                504
            ],
            "name": [
                1
            ],
            "revokedAt": [
                193
            ],
            "__typename": [
                1
            ]
        },
        "ApiKeyToken": {
            "token": [
                1
            ],
            "__typename": [
                1
            ]
        },
        "AppConnection": {
            "accessToken": [
                1
            ],
            "authFailedAt": [
                1
            ],
            "authFailedReason": [
                1
            ],
            "externalAccountId": [
                1
            ],
            "handle": [
                1
            ],
            "id": [
                10
            ],
            "name": [
                1
            ],
            "providerName": [
                1
            ],
            "scope": [
                143
            ],
            "scopes": [
                1
            ],
            "userWorkspaceId": [
                1
            ],
            "visibility": [
                1
            ],
            "workspaceMemberId": [
                1
            ],
            "__typename": [
                1
            ]
        },
        "AppKeyValue": {
            "key": [
                1
            ],
            "scope": [
                34
            ],
            "value": [
                295
            ],
            "__typename": [
                1
            ]
        },
        "AppKeyValueScope": {},
        "AppMessageInput": {
            "externalId": [
                1
            ],
            "participants": [
                36
            ],
            "receivedAt": [
                193
            ],
            "subject": [
                1
            ],
            "text": [
                1
            ],
            "threadExternalId": [
                1
            ],
            "__typename": [
                1
            ]
        },
        "AppMessageParticipantInput": {
            "displayName": [
                1
            ],
            "handle": [
                1
            ],
            "personId": [
                504
            ],
            "role": [
                336
            ],
            "workspaceMemberId": [
                504
            ],
            "__typename": [
                1
            ]
        },
        "Application": {
            "agents": [
                3
            ],
            "applicationRegistration": [
                59
            ],
            "applicationRegistrationId": [
                504
            ],
            "applicationVariables": [
                62
            ],
            "autoUpgrade": [
                4
            ],
            "availablePackages": [
                295
            ],
            "canBeUninstalled": [
                4
            ],
            "commandMenuItems": [
                138
            ],
            "createdAt": [
                193
            ],
            "defaultLogicFunctionRole": [
                431
            ],
            "defaultRoleId": [
                1
            ],
            "description": [
                1
            ],
            "frontComponents": [
                268
            ],
            "healthCheckLogicFunctionId": [
                504
            ],
            "id": [
                504
            ],
            "isUninstallBlockedByOtherWorkspaceInstallations": [
                4
            ],
            "logicFunctions": [
                307
            ],
            "logoFileId": [
                504
            ],
            "logoUrl": [
                1
            ],
            "name": [
                1
            ],
            "objects": [
                358
            ],
            "packageJsonChecksum": [
                1
            ],
            "packageJsonFileId": [
                504
            ],
            "settingsCustomTabFrontComponentId": [
                504
            ],
            "settingsMenuItems": [
                464
            ],
            "universalIdentifier": [
                1
            ],
            "version": [
                1
            ],
            "yarnLockChecksum": [
                1
            ],
            "yarnLockFileId": [
                504
            ],
            "__typename": [
                1
            ]
        },
        "ApplicationAuthorization": {
            "applicationId": [
                504
            ],
            "applicationName": [
                1
            ],
            "applicationUniversalIdentifier": [
                1
            ],
            "createdAt": [
                193
            ],
            "id": [
                504
            ],
            "lastAuthorizedAt": [
                193
            ],
            "lastUsedAt": [
                193
            ],
            "scopes": [
                1
            ],
            "workspaceId": [
                504
            ],
            "__typename": [
                1
            ]
        },
        "ApplicationCapabilityGrant": {
            "grantedCapabilities": [
                1
            ],
            "id": [
                504
            ],
            "__typename": [
                1
            ]
        },
        "ApplicationConnectedAccountDTO": {
            "applicationId": [
                504
            ],
            "archivedAt": [
                193
            ],
            "authFailedAt": [
                193
            ],
            "authFailedReason": [
                1
            ],
            "connectionParameters": [
                405
            ],
            "connectionProviderId": [
                504
            ],
            "createdAt": [
                193
            ],
            "handle": [
                1
            ],
            "handleAliases": [
                1
            ],
            "id": [
                504
            ],
            "isOwnedByCurrentUser": [
                4
            ],
            "lastCredentialsRefreshedAt": [
                193
            ],
            "lastSignedInAt": [
                193
            ],
            "name": [
                1
            ],
            "provider": [
                1
            ],
            "scope": [
                143
            ],
            "scopes": [
                1
            ],
            "updatedAt": [
                193
            ],
            "userWorkspaceId": [
                504
            ],
            "visibility": [
                1
            ],
            "__typename": [
                1
            ]
        },
        "ApplicationConnectionProvider": {
            "applicationId": [
                1
            ],
            "displayName": [
                1
            ],
            "id": [
                504
            ],
            "logoUrl": [
                1
            ],
            "name": [
                1
            ],
            "oauth": [
                42
            ],
            "scope": [
                147
            ],
            "type": [
                1
            ],
            "__typename": [
                1
            ]
        },
        "ApplicationConnectionProviderOAuthConfig": {
            "isClientCredentialsConfigured": [
                4
            ],
            "scopes": [
                1
            ],
            "__typename": [
                1
            ]
        },
        "ApplicationExport": {
            "application": [
                44
            ],
            "coverage": [
                45
            ],
            "files": [
                47
            ],
            "manifest": [
                295
            ],
            "__typename": [
                1
            ]
        },
        "ApplicationExportApplication": {
            "displayName": [
                1
            ],
            "sourceType": [
                57
            ],
            "universalIdentifier": [
                1
            ],
            "__typename": [
                1
            ]
        },
        "ApplicationExportCoverageEntry": {
            "metadataName": [
                1
            ],
            "reason": [
                1
            ],
            "status": [
                46
            ],
            "universalIdentifier": [
                1
            ],
            "__typename": [
                1
            ]
        },
        "ApplicationExportCoverageStatus": {},
        "ApplicationExportFile": {
            "content": [
                1
            ],
            "folder": [
                1
            ],
            "path": [
                1
            ],
            "__typename": [
                1
            ]
        },
        "ApplicationFileCompletionError": {
            "fileId": [
                504
            ],
            "message": [
                1
            ],
            "__typename": [
                1
            ]
        },
        "ApplicationFileUploadError": {
            "fileFolder": [
                261
            ],
            "filePath": [
                1
            ],
            "message": [
                1
            ],
            "__typename": [
                1
            ]
        },
        "ApplicationFileUploadRequestInput": {
            "fileFolder": [
                261
            ],
            "filePath": [
                1
            ],
            "size": [
                8
            ],
            "__typename": [
                1
            ]
        },
        "ApplicationFileUploadTarget": {
            "contentType": [
                1
            ],
            "expiresAt": [
                193
            ],
            "fileFolder": [
                261
            ],
            "fileId": [
                504
            ],
            "filePath": [
                1
            ],
            "uploadUrl": [
                1
            ],
            "__typename": [
                1
            ]
        },
        "ApplicationHealthCheckAction": {
            "label": [
                1
            ],
            "location": [
                1
            ],
            "__typename": [
                1
            ]
        },
        "ApplicationHealthCheckResult": {
            "action": [
                52
            ],
            "description": [
                1
            ],
            "status": [
                54
            ],
            "title": [
                1
            ],
            "__typename": [
                1
            ]
        },
        "ApplicationHealthStatus": {},
        "ApplicationPreferences": {
            "applicationId": [
                504
            ],
            "settingsMenuItems": [
                464
            ],
            "variables": [
                602
            ],
            "__typename": [
                1
            ]
        },
        "ApplicationRegistration": {
            "createdAt": [
                193
            ],
            "galleryImagesUrls": [
                1
            ],
            "id": [
                504
            ],
            "isConfigured": [
                4
            ],
            "isListed": [
                4
            ],
            "isPreInstalled": [
                4
            ],
            "isVetted": [
                4
            ],
            "latestAvailableVersion": [
                1
            ],
            "logoUrl": [
                1
            ],
            "name": [
                1
            ],
            "oAuthClientId": [
                1
            ],
            "oAuthRedirectUris": [
                1
            ],
            "oAuthScopes": [
                1
            ],
            "ownerWorkspaceId": [
                504
            ],
            "sourcePackage": [
                1
            ],
            "sourceType": [
                57
            ],
            "universalIdentifier": [
                1
            ],
            "updatedAt": [
                193
            ],
            "__typename": [
                1
            ]
        },
        "ApplicationRegistrationSourceType": {},
        "ApplicationRegistrationStats": {
            "activeInstalls": [
                8
            ],
            "autoUpdateEnabled": [
                8
            ],
            "creditsUsedBreakdown": [
                190
            ],
            "mostInstalledVersion": [
                1
            ],
            "suspendedInstalls": [
                8
            ],
            "totalCreditsUsed": [
                11
            ],
            "versionDistribution": [
                612
            ],
            "__typename": [
                1
            ]
        },
        "ApplicationRegistrationSummary": {
            "id": [
                504
            ],
            "latestAvailableVersion": [
                1
            ],
            "logoUrl": [
                1
            ],
            "sourceType": [
                57
            ],
            "__typename": [
                1
            ]
        },
        "ApplicationRegistrationVariable": {
            "createdAt": [
                193
            ],
            "description": [
                1
            ],
            "id": [
                504
            ],
            "isDeprecated": [
                4
            ],
            "isFilled": [
                4
            ],
            "isRequired": [
                4
            ],
            "isSecret": [
                4
            ],
            "key": [
                1
            ],
            "options": [
                295
            ],
            "type": [
                1
            ],
            "updatedAt": [
                193
            ],
            "value": [
                1
            ],
            "__typename": [
                1
            ]
        },
        "ApplicationTokenPair": {
            "applicationAccessToken": [
                67
            ],
            "applicationRefreshToken": [
                67
            ],
            "__typename": [
                1
            ]
        },
        "ApplicationVariable": {
            "description": [
                1
            ],
            "id": [
                504
            ],
            "isDeprecated": [
                4
            ],
            "isRequired": [
                4
            ],
            "isSecret": [
                4
            ],
            "key": [
                1
            ],
            "label": [
                1
            ],
            "options": [
                295
            ],
            "scope": [
                63
            ],
            "type": [
                1
            ],
            "value": [
                1
            ],
            "__typename": [
                1
            ]
        },
        "ApplicationVariableScope": {},
        "ApprovedAccessDomain": {
            "createdAt": [
                193
            ],
            "domain": [
                1
            ],
            "id": [
                504
            ],
            "isValidated": [
                4
            ],
            "__typename": [
                1
            ]
        },
        "AuthBypassProviders": {
            "google": [
                4
            ],
            "microsoft": [
                4
            ],
            "password": [
                4
            ],
            "__typename": [
                1
            ]
        },
        "AuthProviders": {
            "google": [
                4
            ],
            "magicLink": [
                4
            ],
            "microsoft": [
                4
            ],
            "password": [
                4
            ],
            "sso": [
                447
            ],
            "__typename": [
                1
            ]
        },
        "AuthToken": {
            "expiresAt": [
                193
            ],
            "token": [
                1
            ],
            "__typename": [
                1
            ]
        },
        "AuthTokenPair": {
            "accessOrWorkspaceAgnosticToken": [
                67
            ],
            "refreshToken": [
                67
            ],
            "__typename": [
                1
            ]
        },
        "AuthTokens": {
            "tokens": [
                68
            ],
            "__typename": [
                1
            ]
        },
        "AuthorizeApp": {
            "redirectUrl": [
                1
            ],
            "__typename": [
                1
            ]
        },
        "AutocompleteResult": {
            "placeId": [
                1
            ],
            "text": [
                1
            ],
            "__typename": [
                1
            ]
        },
        "AvailableWorkspace": {
            "displayName": [
                1
            ],
            "id": [
                504
            ],
            "inviteHash": [
                1
            ],
            "loginToken": [
                1
            ],
            "logo": [
                1
            ],
            "personalInviteToken": [
                1
            ],
            "sso": [
                446
            ],
            "workspaceUrls": [
                654
            ],
            "__typename": [
                1
            ]
        },
        "AvailableWorkspaces": {
            "availableWorkspacesForSignIn": [
                72
            ],
            "availableWorkspacesForSignUp": [
                72
            ],
            "__typename": [
                1
            ]
        },
        "AvailableWorkspacesAndAccessTokens": {
            "availableWorkspaces": [
                73
            ],
            "tokens": [
                68
            ],
            "__typename": [
                1
            ]
        },
        "AxisNameDisplay": {},
        "BarChartConfiguration": {
            "aggregateFieldMetadataId": [
                504
            ],
            "aggregateOperation": [
                20
            ],
            "axisNameDisplay": [
                75
            ],
            "color": [
                1
            ],
            "configurationType": [
                631
            ],
            "description": [
                1
            ],
            "displayDataLabel": [
                4
            ],
            "displayLegend": [
                4
            ],
            "filter": [
                295
            ],
            "firstDayOfTheWeek": [
                8
            ],
            "groupMode": [
                79
            ],
            "isCumulative": [
                4
            ],
            "layout": [
                80
            ],
            "numberFormat": [
                125
            ],
            "omitNullValues": [
                4
            ],
            "primaryAxisDateGranularity": [
                372
            ],
            "primaryAxisGroupByFieldMetadataId": [
                504
            ],
            "primaryAxisGroupBySubFieldName": [
                1
            ],
            "primaryAxisManualSortOrder": [
                1
            ],
            "primaryAxisOrderBy": [
                276
            ],
            "rangeMax": [
                11
            ],
            "rangeMin": [
                11
            ],
            "secondaryAxisGroupByDateGranularity": [
                372
            ],
            "secondaryAxisGroupByFieldMetadataId": [
                504
            ],
            "secondaryAxisGroupBySubFieldName": [
                1
            ],
            "secondaryAxisManualSortOrder": [
                1
            ],
            "secondaryAxisOrderBy": [
                276
            ],
            "splitMultiValueFields": [
                4
            ],
            "timezone": [
                1
            ],
            "__typename": [
                1
            ]
        },
        "BarChartData": {
            "data": [
                295
            ],
            "formattedToRawLookup": [
                295
            ],
            "groupMode": [
                79
            ],
            "hasTooManyGroups": [
                4
            ],
            "indexBy": [
                1
            ],
            "keys": [
                1
            ],
            "layout": [
                80
            ],
            "series": [
                81
            ],
            "showDataLabels": [
                4
            ],
            "showLegend": [
                4
            ],
            "xAxisLabel": [
                1
            ],
            "yAxisLabel": [
                1
            ],
            "__typename": [
                1
            ]
        },
        "BarChartDataInput": {
            "configuration": [
                295
            ],
            "objectMetadataId": [
                504
            ],
            "__typename": [
                1
            ]
        },
        "BarChartGroupMode": {},
        "BarChartLayout": {},
        "BarChartSeries": {
            "key": [
                1
            ],
            "label": [
                1
            ],
            "__typename": [
                1
            ]
        },
        "BigInt": {},
        "Billing": {
            "billingUrl": [
                1
            ],
            "isBillingEnabled": [
                4
            ],
            "stripePublishableKey": [
                1
            ],
            "trialPeriods": [
                107
            ],
            "__typename": [
                1
            ]
        },
        "BillingCustomer": {
            "hasPaymentMethod": [
                4
            ],
            "id": [
                504
            ],
            "userCreditsFallback": [
                603
            ],
            "__typename": [
                1
            ]
        },
        "BillingEndTrialPeriod": {
            "billingPortalUrl": [
                1
            ],
            "billingSubscriptions": [
                102
            ],
            "currentBillingSubscription": [
                102
            ],
            "hasPaymentMethod": [
                4
            ],
            "status": [
                478
            ],
            "__typename": [
                1
            ]
        },
        "BillingEntitlement": {
            "key": [
                87
            ],
            "value": [
                4
            ],
            "__typename": [
                1
            ]
        },
        "BillingEntitlementKey": {},
        "BillingLicensedProduct": {
            "description": [
                1
            ],
            "images": [
                1
            ],
            "metadata": [
                99
            ],
            "name": [
                1
            ],
            "prices": [
                93
            ],
            "__typename": [
                1
            ]
        },
        "BillingMeteredProduct": {
            "description": [
                1
            ],
            "images": [
                1
            ],
            "metadata": [
                99
            ],
            "name": [
                1
            ],
            "prices": [
                94
            ],
            "__typename": [
                1
            ]
        },
        "BillingPaymentIntent": {
            "clientSecret": [
                1
            ],
            "paymentIntentType": [
                1
            ],
            "__typename": [
                1
            ]
        },
        "BillingPlan": {
            "baseProducts": [
                88
            ],
            "downgradePlanKeys": [
                92
            ],
            "isSellable": [
                4
            ],
            "meteredProducts": [
                89
            ],
            "planKey": [
                92
            ],
            "resourceCreditProducts": [
                88
            ],
            "upgradePlanKeys": [
                92
            ],
            "__typename": [
                1
            ]
        },
        "BillingPlanKey": {},
        "BillingPriceLicensed": {
            "creditAmount": [
                11
            ],
            "isSellable": [
                4
            ],
            "priceUsageType": [
                109
            ],
            "recurringInterval": [
                477
            ],
            "stripePriceId": [
                1
            ],
            "unitAmount": [
                11
            ],
            "__typename": [
                1
            ]
        },
        "BillingPriceMetered": {
            "priceUsageType": [
                109
            ],
            "recurringInterval": [
                477
            ],
            "stripePriceId": [
                1
            ],
            "tiers": [
                95
            ],
            "__typename": [
                1
            ]
        },
        "BillingPriceTier": {
            "flatAmount": [
                11
            ],
            "unitAmount": [
                11
            ],
            "upTo": [
                11
            ],
            "__typename": [
                1
            ]
        },
        "BillingProduct": {
            "description": [
                1
            ],
            "images": [
                1
            ],
            "metadata": [
                99
            ],
            "name": [
                1
            ],
            "__typename": [
                1
            ]
        },
        "BillingProductDTO": {
            "description": [
                1
            ],
            "images": [
                1
            ],
            "metadata": [
                99
            ],
            "name": [
                1
            ],
            "on_BillingLicensedProduct": [
                88
            ],
            "on_BillingMeteredProduct": [
                89
            ],
            "__typename": [
                1
            ]
        },
        "BillingProductKey": {},
        "BillingProductMetadata": {
            "isLegacy": [
                1
            ],
            "planKey": [
                92
            ],
            "priceUsageBased": [
                109
            ],
            "productKey": [
                98
            ],
            "__typename": [
                1
            ]
        },
        "BillingResourceCreditUsage": {
            "periodEnd": [
                193
            ],
            "periodStart": [
                193
            ],
            "productKey": [
                98
            ],
            "unitPriceCents": [
                11
            ],
            "userCreditsUsed": [
                11
            ],
            "workspaceCreditsExtraGranted": [
                11
            ],
            "workspaceCreditsGranted": [
                11
            ],
            "workspaceCreditsGrantedForSeats": [
                11
            ],
            "workspaceCreditsSeats": [
                8
            ],
            "workspaceCreditsTotalGranted": [
                11
            ],
            "workspaceCreditsUsed": [
                11
            ],
            "__typename": [
                1
            ]
        },
        "BillingSession": {
            "url": [
                1
            ],
            "__typename": [
                1
            ]
        },
        "BillingSubscription": {
            "billingSubscriptionItems": [
                104
            ],
            "cancelAt": [
                193
            ],
            "collectionMethod": [
                103
            ],
            "currentPeriodEnd": [
                193
            ],
            "id": [
                504
            ],
            "interval": [
                477
            ],
            "metadata": [
                295
            ],
            "phases": [
                105
            ],
            "status": [
                478
            ],
            "__typename": [
                1
            ]
        },
        "BillingSubscriptionCollectionMethod": {},
        "BillingSubscriptionItem": {
            "billingProduct": [
                97
            ],
            "creditAmount": [
                11
            ],
            "hasReachedCurrentPeriodCap": [
                4
            ],
            "id": [
                504
            ],
            "quantity": [
                11
            ],
            "stripePriceId": [
                1
            ],
            "unitAmount": [
                11
            ],
            "__typename": [
                1
            ]
        },
        "BillingSubscriptionSchedulePhase": {
            "end_date": [
                11
            ],
            "items": [
                106
            ],
            "start_date": [
                11
            ],
            "__typename": [
                1
            ]
        },
        "BillingSubscriptionSchedulePhaseItem": {
            "price": [
                1
            ],
            "quantity": [
                11
            ],
            "__typename": [
                1
            ]
        },
        "BillingTrialPeriod": {
            "duration": [
                11
            ],
            "isCreditCardRequired": [
                4
            ],
            "__typename": [
                1
            ]
        },
        "BillingUpdate": {
            "billingSubscriptions": [
                102
            ],
            "currentBillingSubscription": [
                102
            ],
            "__typename": [
                1
            ]
        },
        "BillingUsageType": {},
        "BooleanFieldComparison": {
            "is": [
                4
            ],
            "isNot": [
                4
            ],
            "__typename": [
                1
            ]
        },
        "CalendarChannel": {
            "connectedAccountId": [
                504
            ],
            "contactAutoCreationPolicy": [
                112
            ],
            "createdAt": [
                193
            ],
            "excludePrivateEvents": [
                4
            ],
            "handle": [
                1
            ],
            "id": [
                504
            ],
            "isContactAutoCreationEnabled": [
                4
            ],
            "isSyncEnabled": [
                4
            ],
            "syncStage": [
                113
            ],
            "syncStageStartedAt": [
                193
            ],
            "syncStatus": [
                114
            ],
            "syncedAt": [
                193
            ],
            "throttleFailureCount": [
                11
            ],
            "updatedAt": [
                193
            ],
            "visibility": [
                115
            ],
            "__typename": [
                1
            ]
        },
        "CalendarChannelContactAutoCreationPolicy": {},
        "CalendarChannelSyncStage": {},
        "CalendarChannelSyncStatus": {},
        "CalendarChannelVisibility": {},
        "CalendarConfiguration": {
            "configurationType": [
                631
            ],
            "__typename": [
                1
            ]
        },
        "CallRecordingSummaryConfiguration": {
            "configurationType": [
                631
            ],
            "__typename": [
                1
            ]
        },
        "CallRecordingTranscriptConfiguration": {
            "configurationType": [
                631
            ],
            "__typename": [
                1
            ]
        },
        "CampaignAudiencePreviewDTO": {
            "duplicateEmails": [
                8
            ],
            "globallyUnsubscribed": [
                8
            ],
            "hardSuppressed": [
                8
            ],
            "sendable": [
                8
            ],
            "topicUnsubscribed": [
                8
            ],
            "totalMembers": [
                8
            ],
            "trackingRefused": [
                8
            ],
            "withoutEmail": [
                8
            ],
            "__typename": [
                1
            ]
        },
        "CancelMessageCampaignInput": {
            "campaignId": [
                1
            ],
            "__typename": [
                1
            ]
        },
        "CancelMessageCampaignOutputDTO": {
            "campaignId": [
                1
            ],
            "canceledMessageCount": [
                8
            ],
            "__typename": [
                1
            ]
        },
        "Captcha": {
            "provider": [
                123
            ],
            "siteKey": [
                1
            ],
            "__typename": [
                1
            ]
        },
        "CaptchaDriverType": {},
        "ChannelSyncSuccess": {
            "success": [
                4
            ],
            "__typename": [
                1
            ]
        },
        "ChartNumberFormat": {},
        "ChatConfiguration": {
            "configurationType": [
                631
            ],
            "__typename": [
                1
            ]
        },
        "ChatStreamCatchupChunks": {
            "chunks": [
                295
            ],
            "error": [
                128
            ],
            "maxSeq": [
                8
            ],
            "__typename": [
                1
            ]
        },
        "ChatStreamError": {
            "code": [
                1
            ],
            "message": [
                1
            ],
            "__typename": [
                1
            ]
        },
        "ChatThreadsConfiguration": {
            "configurationType": [
                631
            ],
            "__typename": [
                1
            ]
        },
        "CheckUserExist": {
            "availableWorkspacesCount": [
                11
            ],
            "exists": [
                4
            ],
            "isEmailVerified": [
                4
            ],
            "__typename": [
                1
            ]
        },
        "ClaimableApplicationRegistration": {
            "author": [
                1
            ],
            "description": [
                1
            ],
            "id": [
                1
            ],
            "isOwned": [
                4
            ],
            "logoUrl": [
                1
            ],
            "name": [
                1
            ],
            "sourcePackage": [
                1
            ],
            "universalIdentifier": [
                1
            ],
            "__typename": [
                1
            ]
        },
        "ClientAiEvaluationModelConfig": {
            "description": [
                1
            ],
            "inputCostPerMillionTokens": [
                11
            ],
            "isAvailable": [
                4
            ],
            "isDeprecated": [
                4
            ],
            "label": [
                1
            ],
            "maxCriteriaPerQuestion": [
                11
            ],
            "maxScoreLevels": [
                11
            ],
            "medianLatencyMs": [
                11
            ],
            "modelId": [
                1
            ],
            "outputCostPerMillionTokens": [
                11
            ],
            "providerLabel": [
                1
            ],
            "supportedQuestionTypes": [
                1
            ],
            "__typename": [
                1
            ]
        },
        "ClientAiModelConfig": {
            "contextWindowTokens": [
                11
            ],
            "costPerTask": [
                11
            ],
            "dataResidency": [
                1
            ],
            "effort": [
                1
            ],
            "efforts": [
                1
            ],
            "inputCostPerMillionTokens": [
                11
            ],
            "intelligenceIndex": [
                11
            ],
            "isBenchmarkInherited": [
                4
            ],
            "isDeprecated": [
                4
            ],
            "label": [
                1
            ],
            "maxOutputTokens": [
                11
            ],
            "modelFamily": [
                352
            ],
            "modelFamilyLabel": [
                1
            ],
            "modelId": [
                1
            ],
            "nativeCapabilities": [
                354
            ],
            "outputCostPerMillionTokens": [
                11
            ],
            "outputTokensPerSecond": [
                11
            ],
            "providerLabel": [
                1
            ],
            "providerName": [
                1
            ],
            "sdkPackage": [
                1
            ],
            "__typename": [
                1
            ]
        },
        "ClientAiModelTierConfig": {
            "modelId": [
                1
            ],
            "tier": [
                22
            ],
            "__typename": [
                1
            ]
        },
        "ClientConfig": {
            "aiEvaluationModels": [
                132
            ],
            "aiModelTiers": [
                134
            ],
            "aiModels": [
                133
            ],
            "allowRequestsToTwentyIcons": [
                4
            ],
            "analyticsEnabled": [
                4
            ],
            "api": [
                28
            ],
            "appVersion": [
                1
            ],
            "authProviders": [
                66
            ],
            "billing": [
                83
            ],
            "calendarBookingPageId": [
                1
            ],
            "canManageFeatureFlags": [
                4
            ],
            "captcha": [
                122
            ],
            "defaultSubdomain": [
                1
            ],
            "enterpriseInstanceType": [
                1
            ],
            "frontDomain": [
                1
            ],
            "isAttachmentPreviewEnabled": [
                4
            ],
            "isBookCallOnboardingStepEnabled": [
                4
            ],
            "isClickHouseConfigured": [
                4
            ],
            "isCloudflareIntegrationEnabled": [
                4
            ],
            "isCompanyEnrichmentEnabled": [
                4
            ],
            "isConfigVariablesInDbEnabled": [
                4
            ],
            "isCookieSessionEnabled": [
                4
            ],
            "isEmailVerificationRequired": [
                4
            ],
            "isEmailingDomainInDemoMode": [
                4
            ],
            "isGoogleCalendarEnabled": [
                4
            ],
            "isGoogleMessagingEnabled": [
                4
            ],
            "isImapSmtpCaldavEnabled": [
                4
            ],
            "isMicrosoftCalendarEnabled": [
                4
            ],
            "isMicrosoftMessagingEnabled": [
                4
            ],
            "isMultiWorkspaceEnabled": [
                4
            ],
            "isOnboardingAiChatEnabled": [
                4
            ],
            "isWorkspaceSchemaDDLLocked": [
                4
            ],
            "maintenance": [
                136
            ],
            "publicFeatureFlags": [
                403
            ],
            "publicFunctionDomain": [
                1
            ],
            "sentry": [
                462
            ],
            "serverUrl": [
                1
            ],
            "signInPrefilled": [
                4
            ],
            "support": [
                479
            ],
            "__typename": [
                1
            ]
        },
        "ClientConfigMaintenanceMode": {
            "endAt": [
                193
            ],
            "link": [
                1
            ],
            "startAt": [
                193
            ],
            "__typename": [
                1
            ]
        },
        "CollectionHash": {
            "collectionName": [
                25
            ],
            "hash": [
                1
            ],
            "__typename": [
                1
            ]
        },
        "CommandMenuItem": {
            "applicationId": [
                504
            ],
            "availabilityObjectMetadataId": [
                504
            ],
            "availabilityType": [
                139
            ],
            "conditionalAvailabilityExpression": [
                1
            ],
            "conditionalPinnedExpression": [
                1
            ],
            "coreWorkflowVersionId": [
                504
            ],
            "createdAt": [
                193
            ],
            "engineComponentKey": [
                227
            ],
            "frontComponent": [
                268
            ],
            "frontComponentId": [
                504
            ],
            "hotKeys": [
                1
            ],
            "icon": [
                1
            ],
            "id": [
                504
            ],
            "isActive": [
                4
            ],
            "isPinned": [
                4
            ],
            "label": [
                1
            ],
            "navigationTargetObjectMetadataId": [
                504
            ],
            "pageLayoutId": [
                504
            ],
            "payload": [
                140
            ],
            "position": [
                11
            ],
            "shortLabel": [
                1
            ],
            "universalIdentifier": [
                504
            ],
            "updatedAt": [
                193
            ],
            "workflowVersionId": [
                504
            ],
            "__typename": [
                1
            ]
        },
        "CommandMenuItemAvailabilityType": {},
        "CommandMenuItemPayload": {
            "on_ObjectMetadataCommandMenuItemPayload": [
                364
            ],
            "on_PathCommandMenuItemPayload": [
                389
            ],
            "__typename": [
                1
            ]
        },
        "CompleteApplicationFileUploadsResult": {
            "errors": [
                48
            ],
            "files": [
                259
            ],
            "__typename": [
                1
            ]
        },
        "ConnectedAccountPublicDTO": {
            "applicationId": [
                504
            ],
            "archivedAt": [
                193
            ],
            "authFailedAt": [
                193
            ],
            "authFailedReason": [
                1
            ],
            "connectionParameters": [
                405
            ],
            "connectionProviderId": [
                504
            ],
            "createdAt": [
                193
            ],
            "handle": [
                1
            ],
            "handleAliases": [
                1
            ],
            "id": [
                504
            ],
            "lastCredentialsRefreshedAt": [
                193
            ],
            "lastSignedInAt": [
                193
            ],
            "name": [
                1
            ],
            "provider": [
                1
            ],
            "scope": [
                143
            ],
            "scopes": [
                1
            ],
            "updatedAt": [
                193
            ],
            "userWorkspaceId": [
                504
            ],
            "visibility": [
                1
            ],
            "__typename": [
                1
            ]
        },
        "ConnectedAccountScope": {},
        "ConnectedImapSmtpCaldavAccount": {
            "connectionParameters": [
                281
            ],
            "handle": [
                1
            ],
            "id": [
                504
            ],
            "provider": [
                1
            ],
            "userWorkspaceId": [
                504
            ],
            "__typename": [
                1
            ]
        },
        "ConnectionCursor": {},
        "ConnectionParametersInput": {
            "connectionSecurity": [
                220
            ],
            "host": [
                1
            ],
            "password": [
                1
            ],
            "port": [
                11
            ],
            "username": [
                1
            ],
            "__typename": [
                1
            ]
        },
        "ConnectionProviderScope": {},
        "CreateAgentInput": {
            "description": [
                1
            ],
            "icon": [
                1
            ],
            "label": [
                1
            ],
            "modelConfiguration": [
                295
            ],
            "modelId": [
                1
            ],
            "name": [
                1
            ],
            "prompt": [
                1
            ],
            "responseFormat": [
                295
            ],
            "roleId": [
                504
            ],
            "triggers": [
                295
            ],
            "__typename": [
                1
            ]
        },
        "CreateApiKeyInput": {
            "expiresAt": [
                1
            ],
            "name": [
                1
            ],
            "revokedAt": [
                1
            ],
            "roleId": [
                504
            ],
            "__typename": [
                1
            ]
        },
        "CreateAppMessageChannelInput": {
            "connectedAccountId": [
                504
            ],
            "displayName": [
                1
            ],
            "handle": [
                1
            ],
            "visibility": [
                332
            ],
            "__typename": [
                1
            ]
        },
        "CreateApplicationFileUploadsResult": {
            "errors": [
                49
            ],
            "targets": [
                51
            ],
            "__typename": [
                1
            ]
        },
        "CreateApplicationRegistration": {
            "applicationRegistration": [
                56
            ],
            "clientSecret": [
                1
            ],
            "__typename": [
                1
            ]
        },
        "CreateApplicationRegistrationInput": {
            "name": [
                1
            ],
            "oAuthRedirectUris": [
                1
            ],
            "oAuthScopes": [
                1
            ],
            "universalIdentifier": [
                1
            ],
            "__typename": [
                1
            ]
        },
        "CreateApprovedAccessDomainInput": {
            "domain": [
                1
            ],
            "email": [
                1
            ],
            "__typename": [
                1
            ]
        },
        "CreateCalendarEventInput": {
            "addConferencing": [
                4
            ],
            "attendees": [
                1
            ],
            "connectedAccountId": [
                1
            ],
            "description": [
                1
            ],
            "endsAt": [
                1
            ],
            "isFullDay": [
                4
            ],
            "location": [
                1
            ],
            "sendInvitations": [
                4
            ],
            "startsAt": [
                1
            ],
            "timeZone": [
                1
            ],
            "title": [
                1
            ],
            "__typename": [
                1
            ]
        },
        "CreateCalendarEventOutput": {
            "calendarEventId": [
                1
            ],
            "conferenceLink": [
                1
            ],
            "error": [
                1
            ],
            "iCalUid": [
                1
            ],
            "success": [
                4
            ],
            "__typename": [
                1
            ]
        },
        "CreateCommandMenuItemInput": {
            "availabilityObjectMetadataId": [
                504
            ],
            "availabilityType": [
                139
            ],
            "conditionalAvailabilityExpression": [
                1
            ],
            "conditionalPinnedExpression": [
                1
            ],
            "coreWorkflowVersionId": [
                504
            ],
            "engineComponentKey": [
                227
            ],
            "frontComponentId": [
                504
            ],
            "hotKeys": [
                1
            ],
            "icon": [
                1
            ],
            "isPinned": [
                4
            ],
            "label": [
                1
            ],
            "navigationTargetObjectMetadataId": [
                504
            ],
            "pageLayoutId": [
                504
            ],
            "payload": [
                295
            ],
            "position": [
                11
            ],
            "shortLabel": [
                1
            ],
            "workflowVersionId": [
                504
            ],
            "__typename": [
                1
            ]
        },
        "CreateEmailGroupChannelInput": {
            "displayName": [
                1
            ],
            "handle": [
                1
            ],
            "__typename": [
                1
            ]
        },
        "CreateEmailGroupChannelOutput": {
            "forwardingAddress": [
                1
            ],
            "messageChannel": [
                326
            ],
            "__typename": [
                1
            ]
        },
        "CreateEmailingDomainInput": {
            "domain": [
                1
            ],
            "__typename": [
                1
            ]
        },
        "CreateFieldInput": {
            "defaultValue": [
                295
            ],
            "description": [
                1
            ],
            "icon": [
                1
            ],
            "isActive": [
                4
            ],
            "isAuditLogged": [
                4
            ],
            "isLabelSyncedWithName": [
                4
            ],
            "isNullable": [
                4
            ],
            "isRemoteCreation": [
                4
            ],
            "isSearchable": [
                4
            ],
            "isSystem": [
                4
            ],
            "isUIEditable": [
                4
            ],
            "isUIReadOnly": [
                4
            ],
            "isUnique": [
                4
            ],
            "label": [
                1
            ],
            "morphRelationsCreationPayload": [
                295
            ],
            "name": [
                1
            ],
            "objectMetadataId": [
                504
            ],
            "options": [
                295
            ],
            "relationCreationPayload": [
                295
            ],
            "settings": [
                295
            ],
            "type": [
                254
            ],
            "__typename": [
                1
            ]
        },
        "CreateFrontComponentInput": {
            "builtComponentChecksum": [
                1
            ],
            "builtComponentPath": [
                1
            ],
            "componentName": [
                1
            ],
            "description": [
                1
            ],
            "id": [
                504
            ],
            "name": [
                1
            ],
            "sourceComponentPath": [
                1
            ],
            "__typename": [
                1
            ]
        },
        "CreateIndexFieldInput": {
            "fieldMetadataId": [
                504
            ],
            "subFieldName": [
                1
            ],
            "__typename": [
                1
            ]
        },
        "CreateIndexInput": {
            "fields": [
                163
            ],
            "indexType": [
                288
            ],
            "objectMetadataId": [
                504
            ],
            "__typename": [
                1
            ]
        },
        "CreateLogicFunctionFromSourceInput": {
            "cronTriggerSettings": [
                295
            ],
            "databaseEventTriggerSettings": [
                295
            ],
            "description": [
                1
            ],
            "httpRouteTriggerSettings": [
                295
            ],
            "id": [
                504
            ],
            "name": [
                1
            ],
            "serverRouteTriggerSettings": [
                295
            ],
            "source": [
                295
            ],
            "timeoutSeconds": [
                11
            ],
            "toolTriggerSettings": [
                295
            ],
            "universalIdentifier": [
                504
            ],
            "workflowActionTriggerSettings": [
                295
            ],
            "__typename": [
                1
            ]
        },
        "CreateMcpServerInput": {
            "authorizationHeaderValue": [
                1
            ],
            "id": [
                504
            ],
            "isEnabled": [
                4
            ],
            "label": [
                1
            ],
            "name": [
                1
            ],
            "url": [
                1
            ],
            "__typename": [
                1
            ]
        },
        "CreateMessageSuppressionInput": {
            "emailAddress": [
                1
            ],
            "unsubscribeTopicId": [
                504
            ],
            "__typename": [
                1
            ]
        },
        "CreateNavigationMenuItemInput": {
            "color": [
                1
            ],
            "folderId": [
                504
            ],
            "icon": [
                1
            ],
            "id": [
                504
            ],
            "link": [
                1
            ],
            "name": [
                1
            ],
            "pageLayoutId": [
                504
            ],
            "position": [
                11
            ],
            "targetObjectMetadataId": [
                504
            ],
            "targetRecordId": [
                504
            ],
            "type": [
                356
            ],
            "userWorkspaceId": [
                504
            ],
            "viewId": [
                504
            ],
            "__typename": [
                1
            ]
        },
        "CreateObjectInput": {
            "color": [
                1
            ],
            "description": [
                1
            ],
            "icon": [
                1
            ],
            "isLabelSyncedWithName": [
                4
            ],
            "isRemote": [
                4
            ],
            "labelPlural": [
                1
            ],
            "labelSingular": [
                1
            ],
            "namePlural": [
                1
            ],
            "nameSingular": [
                1
            ],
            "primaryKeyColumnType": [
                1
            ],
            "primaryKeyFieldMetadataSettings": [
                295
            ],
            "shortcut": [
                1
            ],
            "skipNameField": [
                4
            ],
            "__typename": [
                1
            ]
        },
        "CreateOneFieldMetadataInput": {
            "field": [
                161
            ],
            "__typename": [
                1
            ]
        },
        "CreateOneIndexInput": {
            "index": [
                164
            ],
            "__typename": [
                1
            ]
        },
        "CreateOneObjectInput": {
            "object": [
                169
            ],
            "__typename": [
                1
            ]
        },
        "CreatePageLayoutInput": {
            "name": [
                1
            ],
            "objectMetadataId": [
                504
            ],
            "type": [
                382
            ],
            "__typename": [
                1
            ]
        },
        "CreatePageLayoutTabInput": {
            "layoutMode": [
                381
            ],
            "pageLayoutId": [
                504
            ],
            "position": [
                11
            ],
            "title": [
                1
            ],
            "__typename": [
                1
            ]
        },
        "CreatePageLayoutWidgetInput": {
            "configuration": [
                295
            ],
            "objectMetadataId": [
                504
            ],
            "pageLayoutTabId": [
                504
            ],
            "position": [
                295
            ],
            "title": [
                1
            ],
            "type": [
                632
            ],
            "__typename": [
                1
            ]
        },
        "CreateRecordExportInput": {
            "fieldMetadataIds": [
                504
            ],
            "filter": [
                295
            ],
            "objectMetadataId": [
                504
            ],
            "orderBy": [
                295
            ],
            "__typename": [
                1
            ]
        },
        "CreateRoleInput": {
            "canAccessAllTools": [
                4
            ],
            "canBeAssignedToAgents": [
                4
            ],
            "canBeAssignedToApiKeys": [
                4
            ],
            "canBeAssignedToUsers": [
                4
            ],
            "canDestroyAllObjectRecords": [
                4
            ],
            "canReadAllObjectRecords": [
                4
            ],
            "canSoftDeleteAllObjectRecords": [
                4
            ],
            "canUpdateAllObjectRecords": [
                4
            ],
            "canUpdateAllSettings": [
                4
            ],
            "description": [
                1
            ],
            "icon": [
                1
            ],
            "id": [
                1
            ],
            "label": [
                1
            ],
            "__typename": [
                1
            ]
        },
        "CreateSkillInput": {
            "content": [
                1
            ],
            "description": [
                1
            ],
            "icon": [
                1
            ],
            "id": [
                504
            ],
            "label": [
                1
            ],
            "name": [
                1
            ],
            "__typename": [
                1
            ]
        },
        "CreateUnsubscribeTopicInput": {
            "description": [
                1
            ],
            "name": [
                1
            ],
            "visibility": [
                508
            ],
            "__typename": [
                1
            ]
        },
        "CreateUsageLimitInput": {
            "burstValue": [
                82
            ],
            "limitKind": [
                1
            ],
            "limitValue": [
                82
            ],
            "operationType": [
                590
            ],
            "periodCount": [
                8
            ],
            "periodUnit": [
                1
            ],
            "resourceType": [
                597
            ],
            "spenderId": [
                1
            ],
            "spenderType": [
                1
            ],
            "unit": [
                599
            ],
            "__typename": [
                1
            ]
        },
        "CreateValidationRuleInput": {
            "description": [
                1
            ],
            "errorFieldMetadataId": [
                504
            ],
            "expression": [
                1
            ],
            "icon": [
                1
            ],
            "isActive": [
                4
            ],
            "message": [
                1
            ],
            "name": [
                1
            ],
            "objectMetadataId": [
                504
            ],
            "__typename": [
                1
            ]
        },
        "CreateViewFieldGroupInput": {
            "id": [
                504
            ],
            "isVisible": [
                4
            ],
            "name": [
                1
            ],
            "position": [
                11
            ],
            "viewId": [
                504
            ],
            "__typename": [
                1
            ]
        },
        "CreateViewFieldInput": {
            "aggregateOperation": [
                20
            ],
            "fieldMetadataId": [
                504
            ],
            "id": [
                504
            ],
            "isVisible": [
                4
            ],
            "position": [
                11
            ],
            "size": [
                11
            ],
            "viewFieldGroupId": [
                504
            ],
            "viewId": [
                504
            ],
            "__typename": [
                1
            ]
        },
        "CreateViewFilterGroupInput": {
            "id": [
                504
            ],
            "logicalOperator": [
                620
            ],
            "parentViewFilterGroupId": [
                504
            ],
            "positionInViewFilterGroup": [
                11
            ],
            "viewId": [
                504
            ],
            "__typename": [
                1
            ]
        },
        "CreateViewFilterInput": {
            "fieldMetadataId": [
                504
            ],
            "id": [
                504
            ],
            "operand": [
                621
            ],
            "positionInViewFilterGroup": [
                11
            ],
            "relationTargetFieldMetadataId": [
                504
            ],
            "subFieldName": [
                1
            ],
            "value": [
                295
            ],
            "viewFilterGroupId": [
                504
            ],
            "viewId": [
                504
            ],
            "__typename": [
                1
            ]
        },
        "CreateViewGroupInput": {
            "fieldValue": [
                1
            ],
            "id": [
                504
            ],
            "isVisible": [
                4
            ],
            "position": [
                11
            ],
            "viewId": [
                504
            ],
            "__typename": [
                1
            ]
        },
        "CreateViewInput": {
            "anyFieldFilterValue": [
                1
            ],
            "calendarEndFieldMetadataId": [
                504
            ],
            "calendarFieldMetadataId": [
                504
            ],
            "calendarLayout": [
                614
            ],
            "groupLoadLimit": [
                8
            ],
            "icon": [
                1
            ],
            "id": [
                504
            ],
            "isCompact": [
                4
            ],
            "kanbanAggregateOperation": [
                20
            ],
            "kanbanAggregateOperationFieldMetadataId": [
                504
            ],
            "kanbanColumnWidth": [
                8
            ],
            "key": [
                623
            ],
            "mainGroupByFieldMetadataId": [
                504
            ],
            "name": [
                1
            ],
            "objectMetadataId": [
                504
            ],
            "openRecordIn": [
                624
            ],
            "position": [
                11
            ],
            "shouldHideEmptyGroups": [
                4
            ],
            "type": [
                627
            ],
            "visibility": [
                628
            ],
            "__typename": [
                1
            ]
        },
        "CreateViewSortInput": {
            "direction": [
                626
            ],
            "fieldMetadataId": [
                504
            ],
            "id": [
                504
            ],
            "subFieldName": [
                1
            ],
            "viewId": [
                504
            ],
            "__typename": [
                1
            ]
        },
        "CreateWebhookInput": {
            "description": [
                1
            ],
            "id": [
                504
            ],
            "operations": [
                1
            ],
            "secret": [
                1
            ],
            "targetUrl": [
                1
            ],
            "__typename": [
                1
            ]
        },
        "CreditUsedItem": {
            "creditsUsed": [
                11
            ],
            "label": [
                1
            ],
            "operation": [
                590
            ],
            "resource": [
                597
            ],
            "__typename": [
                1
            ]
        },
        "CursorPaging": {
            "after": [
                145
            ],
            "before": [
                145
            ],
            "first": [
                8
            ],
            "last": [
                8
            ],
            "__typename": [
                1
            ]
        },
        "DatabaseEventAction": {},
        "DateTime": {},
        "DeleteApprovedAccessDomainInput": {
            "id": [
                504
            ],
            "__typename": [
                1
            ]
        },
        "DeleteOneFieldInput": {
            "id": [
                504
            ],
            "__typename": [
                1
            ]
        },
        "DeleteOneIndexInput": {
            "id": [
                504
            ],
            "__typename": [
                1
            ]
        },
        "DeleteOneObjectInput": {
            "id": [
                504
            ],
            "__typename": [
                1
            ]
        },
        "DeleteSso": {
            "identityProviderId": [
                504
            ],
            "__typename": [
                1
            ]
        },
        "DeleteSsoInput": {
            "identityProviderId": [
                504
            ],
            "__typename": [
                1
            ]
        },
        "DeleteTwoFactorAuthenticationMethod": {
            "success": [
                4
            ],
            "__typename": [
                1
            ]
        },
        "DeleteViewFieldGroupInput": {
            "id": [
                504
            ],
            "__typename": [
                1
            ]
        },
        "DeleteViewFieldInput": {
            "id": [
                504
            ],
            "__typename": [
                1
            ]
        },
        "DeleteViewFilterInput": {
            "id": [
                504
            ],
            "__typename": [
                1
            ]
        },
        "DeleteViewGroupInput": {
            "id": [
                504
            ],
            "__typename": [
                1
            ]
        },
        "DeleteViewSortInput": {
            "id": [
                504
            ],
            "__typename": [
                1
            ]
        },
        "DeletedWorkspaceMember": {
            "avatarUrl": [
                1
            ],
            "id": [
                504
            ],
            "name": [
                271
            ],
            "userEmail": [
                1
            ],
            "userWorkspaceId": [
                504
            ],
            "__typename": [
                1
            ]
        },
        "DestroyViewFieldGroupInput": {
            "id": [
                504
            ],
            "__typename": [
                1
            ]
        },
        "DestroyViewFieldInput": {
            "id": [
                504
            ],
            "__typename": [
                1
            ]
        },
        "DestroyViewFilterInput": {
            "id": [
                504
            ],
            "__typename": [
                1
            ]
        },
        "DestroyViewGroupInput": {
            "id": [
                504
            ],
            "__typename": [
                1
            ]
        },
        "DestroyViewSortInput": {
            "id": [
                504
            ],
            "__typename": [
                1
            ]
        },
        "DevelopmentApplication": {
            "id": [
                1
            ],
            "universalIdentifier": [
                1
            ],
            "__typename": [
                1
            ]
        },
        "DomainRecord": {
            "key": [
                1
            ],
            "status": [
                1
            ],
            "type": [
                1
            ],
            "validationType": [
                1
            ],
            "value": [
                1
            ],
            "__typename": [
                1
            ]
        },
        "DomainValidRecords": {
            "domain": [
                1
            ],
            "id": [
                504
            ],
            "isCustomDomainEnabled": [
                4
            ],
            "records": [
                213
            ],
            "__typename": [
                1
            ]
        },
        "DuplicatedDashboard": {
            "createdAt": [
                1
            ],
            "id": [
                504
            ],
            "pageLayoutId": [
                504
            ],
            "position": [
                11
            ],
            "title": [
                1
            ],
            "updatedAt": [
                1
            ],
            "__typename": [
                1
            ]
        },
        "DuplicatedMessageList": {
            "createdAt": [
                1
            ],
            "description": [
                1
            ],
            "id": [
                504
            ],
            "memberCount": [
                11
            ],
            "name": [
                1
            ],
            "position": [
                11
            ],
            "updatedAt": [
                1
            ],
            "__typename": [
                1
            ]
        },
        "EditSso": {
            "id": [
                504
            ],
            "issuer": [
                1
            ],
            "name": [
                1
            ],
            "status": [
                448
            ],
            "type": [
                278
            ],
            "__typename": [
                1
            ]
        },
        "EditSsoInput": {
            "id": [
                504
            ],
            "status": [
                448
            ],
            "__typename": [
                1
            ]
        },
        "EmailAccountConnectionParameters": {
            "CALDAV": [
                146
            ],
            "IMAP": [
                146
            ],
            "SMTP": [
                146
            ],
            "name": [
                1
            ],
            "__typename": [
                1
            ]
        },
        "EmailConnectionSecurity": {},
        "EmailPasswordResetLink": {
            "success": [
                4
            ],
            "__typename": [
                1
            ]
        },
        "EmailThreadConfiguration": {
            "configurationType": [
                631
            ],
            "__typename": [
                1
            ]
        },
        "EmailingDomain": {
            "createdAt": [
                193
            ],
            "domain": [
                1
            ],
            "id": [
                504
            ],
            "status": [
                224
            ],
            "tenantStatus": [
                225
            ],
            "unsubscribeHostnameStatus": [
                506
            ],
            "updatedAt": [
                193
            ],
            "verificationRecords": [
                609
            ],
            "verifiedAt": [
                193
            ],
            "__typename": [
                1
            ]
        },
        "EmailingDomainStatus": {},
        "EmailingDomainTenantStatus": {},
        "EmailsConfiguration": {
            "configurationType": [
                631
            ],
            "__typename": [
                1
            ]
        },
        "EngineComponentKey": {},
        "EnqueueJobInput": {
            "delayMs": [
                8
            ],
            "jobId": [
                1
            ],
            "logicFunctionUniversalIdentifier": [
                1
            ],
            "payload": [
                295
            ],
            "retryLimit": [
                8
            ],
            "__typename": [
                1
            ]
        },
        "EnqueueJobItemInput": {
            "jobId": [
                1
            ],
            "payload": [
                295
            ],
            "__typename": [
                1
            ]
        },
        "EnqueueJobResult": {
            "enqueued": [
                4
            ],
            "jobId": [
                1
            ],
            "logicFunctionUniversalIdentifier": [
                1
            ],
            "__typename": [
                1
            ]
        },
        "EnqueueJobsInput": {
            "delayMs": [
                8
            ],
            "jobs": [
                229
            ],
            "logicFunctionUniversalIdentifier": [
                1
            ],
            "payloads": [
                295
            ],
            "retryLimit": [
                8
            ],
            "__typename": [
                1
            ]
        },
        "EnqueueJobsResult": {
            "enqueued": [
                4
            ],
            "enqueuedJobsCount": [
                8
            ],
            "jobIds": [
                1
            ],
            "logicFunctionUniversalIdentifier": [
                1
            ],
            "__typename": [
                1
            ]
        },
        "EnterpriseLicenseInfoDTO": {
            "expiresAt": [
                193
            ],
            "isValid": [
                4
            ],
            "licensee": [
                1
            ],
            "subscriptionId": [
                1
            ],
            "__typename": [
                1
            ]
        },
        "EnterpriseSubscriptionStatusDTO": {
            "cancelAt": [
                193
            ],
            "currentPeriodEnd": [
                193
            ],
            "expiresAt": [
                193
            ],
            "isCancellationScheduled": [
                4
            ],
            "licensee": [
                1
            ],
            "status": [
                1
            ],
            "__typename": [
                1
            ]
        },
        "EventLogDateRangeInput": {
            "end": [
                193
            ],
            "start": [
                193
            ],
            "__typename": [
                1
            ]
        },
        "EventLogFieldFilterInput": {
            "field": [
                1
            ],
            "operand": [
                237
            ],
            "values": [
                1
            ],
            "__typename": [
                1
            ]
        },
        "EventLogFilterOperand": {},
        "EventLogFiltersInput": {
            "dateRange": [
                235
            ],
            "eventType": [
                1
            ],
            "fieldFilters": [
                236
            ],
            "objectMetadataId": [
                1
            ],
            "recordId": [
                1
            ],
            "userWorkspaceId": [
                1
            ],
            "__typename": [
                1
            ]
        },
        "EventLogPageInfo": {
            "endCursor": [
                1
            ],
            "hasNextPage": [
                4
            ],
            "__typename": [
                1
            ]
        },
        "EventLogQueryInput": {
            "after": [
                1
            ],
            "filters": [
                238
            ],
            "first": [
                8
            ],
            "table": [
                243
            ],
            "__typename": [
                1
            ]
        },
        "EventLogQueryResult": {
            "pageInfo": [
                239
            ],
            "records": [
                242
            ],
            "totalCount": [
                8
            ],
            "__typename": [
                1
            ]
        },
        "EventLogRecord": {
            "event": [
                1
            ],
            "isCustom": [
                4
            ],
            "objectMetadataId": [
                1
            ],
            "properties": [
                295
            ],
            "recordId": [
                1
            ],
            "timestamp": [
                193
            ],
            "userId": [
                1
            ],
            "__typename": [
                1
            ]
        },
        "EventLogTable": {},
        "EventSubscription": {
            "eventStreamId": [
                1
            ],
            "metadataEvents": [
                341
            ],
            "objectRecordEventsWithQueryIds": [
                371
            ],
            "queueJobEvents": [
                298
            ],
            "__typename": [
                1
            ]
        },
        "ExecuteOneLogicFunctionInput": {
            "id": [
                504
            ],
            "payload": [
                295
            ],
            "__typename": [
                1
            ]
        },
        "FeatureFlag": {
            "key": [
                247
            ],
            "value": [
                4
            ],
            "__typename": [
                1
            ]
        },
        "FeatureFlagKey": {},
        "Field": {
            "applicationId": [
                504
            ],
            "createdAt": [
                193
            ],
            "defaultValue": [
                295
            ],
            "description": [
                1
            ],
            "icon": [
                1
            ],
            "id": [
                504
            ],
            "isActive": [
                4
            ],
            "isAuditLogged": [
                4
            ],
            "isLabelSyncedWithName": [
                4
            ],
            "isNullable": [
                4
            ],
            "isSearchable": [
                4
            ],
            "isSystem": [
                4
            ],
            "isUIEditable": [
                4
            ],
            "isUIReadOnly": [
                4
            ],
            "isUnique": [
                4
            ],
            "label": [
                1
            ],
            "morphId": [
                504
            ],
            "morphRelations": [
                424
            ],
            "name": [
                1
            ],
            "object": [
                358
            ],
            "objectMetadataId": [
                504
            ],
            "options": [
                295
            ],
            "relation": [
                424
            ],
            "settings": [
                295
            ],
            "type": [
                254
            ],
            "universalIdentifier": [
                1
            ],
            "updatedAt": [
                193
            ],
            "writability": [
                348
            ],
            "__typename": [
                1
            ]
        },
        "FieldConfiguration": {
            "configurationType": [
                631
            ],
            "fieldDisplayMode": [
                251
            ],
            "fieldMetadataId": [
                1
            ],
            "isUIEditable": [
                4
            ],
            "nestedRelationFieldMetadataId": [
                1
            ],
            "viewId": [
                1
            ],
            "__typename": [
                1
            ]
        },
        "FieldConnection": {
            "edges": [
                252
            ],
            "pageInfo": [
                378
            ],
            "__typename": [
                1
            ]
        },
        "FieldDisplayMode": {},
        "FieldEdge": {
            "cursor": [
                145
            ],
            "node": [
                248
            ],
            "__typename": [
                1
            ]
        },
        "FieldFilter": {
            "and": [
                253
            ],
            "id": [
                505
            ],
            "isActive": [
                110
            ],
            "isSystem": [
                110
            ],
            "isUIEditable": [
                110
            ],
            "isUIReadOnly": [
                110
            ],
            "objectMetadataId": [
                505
            ],
            "or": [
                253
            ],
            "__typename": [
                1
            ]
        },
        "FieldMetadataType": {},
        "FieldPermission": {
            "canReadFieldValue": [
                4
            ],
            "canUpdateFieldValue": [
                4
            ],
            "fieldMetadataId": [
                504
            ],
            "id": [
                504
            ],
            "objectMetadataId": [
                504
            ],
            "roleId": [
                504
            ],
            "__typename": [
                1
            ]
        },
        "FieldPermissionInput": {
            "canReadFieldValue": [
                4
            ],
            "canUpdateFieldValue": [
                4
            ],
            "fieldMetadataId": [
                504
            ],
            "objectMetadataId": [
                504
            ],
            "__typename": [
                1
            ]
        },
        "FieldRichTextConfiguration": {
            "configurationType": [
                631
            ],
            "__typename": [
                1
            ]
        },
        "FieldsConfiguration": {
            "configurationType": [
                631
            ],
            "newFieldDefaultVisibility": [
                4
            ],
            "shouldAllowUserToSeeHiddenFields": [
                4
            ],
            "viewId": [
                1
            ],
            "__typename": [
                1
            ]
        },
        "File": {
            "createdAt": [
                193
            ],
            "id": [
                504
            ],
            "path": [
                1
            ],
            "size": [
                11
            ],
            "__typename": [
                1
            ]
        },
        "FileAttachmentInput": {
            "filename": [
                1
            ],
            "id": [
                504
            ],
            "__typename": [
                1
            ]
        },
        "FileFolder": {},
        "FileUploadTarget": {
            "contentType": [
                1
            ],
            "expiresAt": [
                193
            ],
            "fileId": [
                504
            ],
            "uploadUrl": [
                1
            ],
            "__typename": [
                1
            ]
        },
        "FileWithSignedUrl": {
            "createdAt": [
                193
            ],
            "id": [
                504
            ],
            "path": [
                1
            ],
            "size": [
                11
            ],
            "url": [
                1
            ],
            "__typename": [
                1
            ]
        },
        "FilesConfiguration": {
            "configurationType": [
                631
            ],
            "__typename": [
                1
            ]
        },
        "FindAvailableSSOIDP": {
            "id": [
                504
            ],
            "issuer": [
                1
            ],
            "name": [
                1
            ],
            "status": [
                448
            ],
            "type": [
                278
            ],
            "workspace": [
                651
            ],
            "__typename": [
                1
            ]
        },
        "FindMessageSuppressionsInput": {
            "limit": [
                8
            ],
            "offset": [
                8
            ],
            "reason": [
                339
            ],
            "searchTerm": [
                1
            ],
            "unsubscribeTopicId": [
                504
            ],
            "__typename": [
                1
            ]
        },
        "FormFieldConfiguration": {
            "configurationType": [
                631
            ],
            "fieldMetadataId": [
                1
            ],
            "__typename": [
                1
            ]
        },
        "FrontComponent": {
            "applicationGrantedCapabilities": [
                1
            ],
            "applicationId": [
                504
            ],
            "applicationName": [
                1
            ],
            "applicationTokenPair": [
                61
            ],
            "applicationVariables": [
                295
            ],
            "builtComponentChecksum": [
                1
            ],
            "builtComponentPath": [
                1
            ],
            "componentName": [
                1
            ],
            "createdAt": [
                193
            ],
            "description": [
                1
            ],
            "frontComponentSharedDependenciesChecksum": [
                1
            ],
            "id": [
                504
            ],
            "isHeadless": [
                4
            ],
            "name": [
                1
            ],
            "sourceComponentPath": [
                1
            ],
            "universalIdentifier": [
                504
            ],
            "updatedAt": [
                193
            ],
            "usesSdkClient": [
                4
            ],
            "widgetAvailability": [
                270
            ],
            "__typename": [
                1
            ]
        },
        "FrontComponentConfiguration": {
            "configurationType": [
                631
            ],
            "frontComponentId": [
                504
            ],
            "headerCommandMenuItemUniversalIdentifiers": [
                504
            ],
            "__typename": [
                1
            ]
        },
        "FrontComponentWidgetAvailability": {
            "objectMetadataId": [
                504
            ],
            "pageLayoutType": [
                382
            ],
            "__typename": [
                1
            ]
        },
        "FullName": {
            "firstName": [
                1
            ],
            "lastName": [
                1
            ],
            "__typename": [
                1
            ]
        },
        "GetApiKeyInput": {
            "id": [
                504
            ],
            "__typename": [
                1
            ]
        },
        "GetAuthorizationUrlForSSO": {
            "authorizationURL": [
                1
            ],
            "id": [
                504
            ],
            "type": [
                1
            ],
            "__typename": [
                1
            ]
        },
        "GetAuthorizationUrlForSSOInput": {
            "identityProviderId": [
                504
            ],
            "workspaceInviteHash": [
                1
            ],
            "__typename": [
                1
            ]
        },
        "GrantApplicationCapabilitiesInput": {
            "applicationId": [
                504
            ],
            "capabilities": [
                1
            ],
            "__typename": [
                1
            ]
        },
        "GraphOrderBy": {},
        "GridPosition": {
            "column": [
                11
            ],
            "columnSpan": [
                11
            ],
            "row": [
                11
            ],
            "rowSpan": [
                11
            ],
            "__typename": [
                1
            ]
        },
        "IdentityProviderType": {},
        "IframeConfiguration": {
            "configurationType": [
                631
            ],
            "url": [
                1
            ],
            "__typename": [
                1
            ]
        },
        "ImapSmtpCaldavConnectionSuccess": {
            "connectedAccountId": [
                1
            ],
            "success": [
                4
            ],
            "__typename": [
                1
            ]
        },
        "ImapSmtpCaldavPublicConnectionParameters": {
            "CALDAV": [
                282
            ],
            "IMAP": [
                282
            ],
            "SMTP": [
                282
            ],
            "name": [
                1
            ],
            "__typename": [
                1
            ]
        },
        "ImapSmtpCaldavPublicConnectionParams": {
            "connectionSecurity": [
                220
            ],
            "host": [
                1
            ],
            "port": [
                11
            ],
            "username": [
                1
            ],
            "__typename": [
                1
            ]
        },
        "Impersonate": {
            "loginToken": [
                67
            ],
            "workspace": [
                655
            ],
            "__typename": [
                1
            ]
        },
        "Index": {
            "createdAt": [
                193
            ],
            "id": [
                504
            ],
            "indexFieldMetadataList": [
                286
            ],
            "indexType": [
                288
            ],
            "indexWhereClause": [
                1
            ],
            "isCustom": [
                4
            ],
            "isUnique": [
                4
            ],
            "name": [
                1
            ],
            "updatedAt": [
                193
            ],
            "__typename": [
                1
            ]
        },
        "IndexEdge": {
            "cursor": [
                145
            ],
            "node": [
                284
            ],
            "__typename": [
                1
            ]
        },
        "IndexField": {
            "createdAt": [
                193
            ],
            "fieldMetadataId": [
                504
            ],
            "id": [
                504
            ],
            "order": [
                11
            ],
            "subFieldName": [
                1
            ],
            "updatedAt": [
                193
            ],
            "__typename": [
                1
            ]
        },
        "IndexFilter": {
            "and": [
                287
            ],
            "id": [
                505
            ],
            "isCustom": [
                110
            ],
            "or": [
                287
            ],
            "__typename": [
                1
            ]
        },
        "IndexType": {},
        "IngestAppMessagesInput": {
            "messageChannelId": [
                504
            ],
            "messages": [
                35
            ],
            "__typename": [
                1
            ]
        },
        "IngestAppMessagesOutput": {
            "messages": [
                291
            ],
            "__typename": [
                1
            ]
        },
        "IngestedAppMessage": {
            "externalId": [
                1
            ],
            "messageId": [
                504
            ],
            "messageThreadId": [
                504
            ],
            "__typename": [
                1
            ]
        },
        "InitiateTwoFactorAuthenticationProvisioning": {
            "uri": [
                1
            ],
            "__typename": [
                1
            ]
        },
        "InvalidatePassword": {
            "success": [
                4
            ],
            "__typename": [
                1
            ]
        },
        "InviteSuggestion": {
            "displayName": [
                1
            ],
            "email": [
                1
            ],
            "__typename": [
                1
            ]
        },
        "JSON": {},
        "JSONObject": {},
        "JobState": {},
        "JobStatus": {
            "attemptsMade": [
                8
            ],
            "enqueuedAt": [
                11
            ],
            "failedReason": [
                1
            ],
            "finishedAt": [
                11
            ],
            "jobId": [
                1
            ],
            "progress": [
                8
            ],
            "startedAt": [
                11
            ],
            "state": [
                297
            ],
            "__typename": [
                1
            ]
        },
        "LineChartConfiguration": {
            "aggregateFieldMetadataId": [
                504
            ],
            "aggregateOperation": [
                20
            ],
            "axisNameDisplay": [
                75
            ],
            "color": [
                1
            ],
            "configurationType": [
                631
            ],
            "description": [
                1
            ],
            "displayDataLabel": [
                4
            ],
            "displayLegend": [
                4
            ],
            "filter": [
                295
            ],
            "firstDayOfTheWeek": [
                8
            ],
            "isCumulative": [
                4
            ],
            "isStacked": [
                4
            ],
            "numberFormat": [
                125
            ],
            "omitNullValues": [
                4
            ],
            "primaryAxisDateGranularity": [
                372
            ],
            "primaryAxisGroupByFieldMetadataId": [
                504
            ],
            "primaryAxisGroupBySubFieldName": [
                1
            ],
            "primaryAxisManualSortOrder": [
                1
            ],
            "primaryAxisOrderBy": [
                276
            ],
            "rangeMax": [
                11
            ],
            "rangeMin": [
                11
            ],
            "secondaryAxisGroupByDateGranularity": [
                372
            ],
            "secondaryAxisGroupByFieldMetadataId": [
                504
            ],
            "secondaryAxisGroupBySubFieldName": [
                1
            ],
            "secondaryAxisManualSortOrder": [
                1
            ],
            "secondaryAxisOrderBy": [
                276
            ],
            "splitMultiValueFields": [
                4
            ],
            "timezone": [
                1
            ],
            "__typename": [
                1
            ]
        },
        "LineChartData": {
            "formattedToRawLookup": [
                295
            ],
            "hasTooManyGroups": [
                4
            ],
            "series": [
                303
            ],
            "showDataLabels": [
                4
            ],
            "showLegend": [
                4
            ],
            "xAxisLabel": [
                1
            ],
            "yAxisLabel": [
                1
            ],
            "__typename": [
                1
            ]
        },
        "LineChartDataInput": {
            "configuration": [
                295
            ],
            "objectMetadataId": [
                504
            ],
            "__typename": [
                1
            ]
        },
        "LineChartDataPoint": {
            "x": [
                1
            ],
            "y": [
                11
            ],
            "__typename": [
                1
            ]
        },
        "LineChartSeries": {
            "data": [
                302
            ],
            "key": [
                1
            ],
            "label": [
                1
            ],
            "__typename": [
                1
            ]
        },
        "ListAppConnectionsInput": {
            "providerName": [
                1
            ],
            "scope": [
                143
            ],
            "userWorkspaceId": [
                1
            ],
            "visibility": [
                1
            ],
            "__typename": [
                1
            ]
        },
        "ListAppMessageChannelsInput": {
            "connectedAccountId": [
                504
            ],
            "__typename": [
                1
            ]
        },
        "Location": {
            "lat": [
                11
            ],
            "lng": [
                11
            ],
            "__typename": [
                1
            ]
        },
        "LogicFunction": {
            "applicationId": [
                504
            ],
            "canRunOnDemand": [
                4
            ],
            "createdAt": [
                193
            ],
            "cronTriggerSettings": [
                295
            ],
            "databaseEventTriggerSettings": [
                295
            ],
            "description": [
                1
            ],
            "executionMode": [
                308
            ],
            "handlerName": [
                1
            ],
            "httpRouteTriggerSettings": [
                295
            ],
            "id": [
                504
            ],
            "name": [
                1
            ],
            "runtime": [
                1
            ],
            "sourceHandlerPath": [
                1
            ],
            "timeoutSeconds": [
                11
            ],
            "toolTriggerSettings": [
                295
            ],
            "universalIdentifier": [
                504
            ],
            "updatedAt": [
                193
            ],
            "workflowActionTriggerSettings": [
                295
            ],
            "__typename": [
                1
            ]
        },
        "LogicFunctionExecutionMode": {},
        "LogicFunctionExecutionResult": {
            "data": [
                295
            ],
            "duration": [
                11
            ],
            "error": [
                295
            ],
            "logs": [
                1
            ],
            "status": [
                310
            ],
            "__typename": [
                1
            ]
        },
        "LogicFunctionExecutionStatus": {},
        "LogicFunctionIdInput": {
            "id": [
                10
            ],
            "__typename": [
                1
            ]
        },
        "LogicFunctionLogs": {
            "logs": [
                1
            ],
            "name": [
                1
            ],
            "universalIdentifier": [
                504
            ],
            "__typename": [
                1
            ]
        },
        "LogicFunctionLogsInput": {
            "applicationId": [
                504
            ],
            "applicationUniversalIdentifier": [
                504
            ],
            "id": [
                504
            ],
            "name": [
                1
            ],
            "universalIdentifier": [
                504
            ],
            "__typename": [
                1
            ]
        },
        "LoginToken": {
            "loginToken": [
                67
            ],
            "__typename": [
                1
            ]
        },
        "MarketplaceApp": {
            "author": [
                1
            ],
            "category": [
                1
            ],
            "description": [
                1
            ],
            "id": [
                1
            ],
            "isVetted": [
                4
            ],
            "logoUrl": [
                1
            ],
            "name": [
                1
            ],
            "sourcePackage": [
                1
            ],
            "__typename": [
                1
            ]
        },
        "MarketplaceAppDetail": {
            "aboutDescription": [
                1
            ],
            "author": [
                1
            ],
            "billsCredits": [
                4
            ],
            "category": [
                1
            ],
            "defaultRoleUniversalIdentifier": [
                1
            ],
            "description": [
                1
            ],
            "emailSupport": [
                1
            ],
            "galleryImages": [
                1
            ],
            "id": [
                1
            ],
            "installCount": [
                8
            ],
            "isListed": [
                4
            ],
            "isVetted": [
                4
            ],
            "issueReportUrl": [
                1
            ],
            "latestAvailableVersion": [
                1
            ],
            "logoUrl": [
                1
            ],
            "manifest": [
                295
            ],
            "name": [
                1
            ],
            "objects": [
                317
            ],
            "pricingDescription": [
                1
            ],
            "requestedCapabilities": [
                1
            ],
            "roles": [
                318
            ],
            "screenshots": [
                1
            ],
            "sourcePackage": [
                1
            ],
            "sourceType": [
                57
            ],
            "termsUrl": [
                1
            ],
            "universalIdentifier": [
                1
            ],
            "websiteUrl": [
                1
            ],
            "__typename": [
                1
            ]
        },
        "MarketplaceAppObject": {
            "labelPlural": [
                1
            ],
            "labelSingular": [
                1
            ],
            "universalIdentifier": [
                1
            ],
            "__typename": [
                1
            ]
        },
        "MarketplaceAppRole": {
            "canAccessAllTools": [
                4
            ],
            "canDestroyAllObjectRecords": [
                4
            ],
            "canReadAllObjectRecords": [
                4
            ],
            "canSoftDeleteAllObjectRecords": [
                4
            ],
            "canUpdateAllObjectRecords": [
                4
            ],
            "canUpdateAllSettings": [
                4
            ],
            "description": [
                1
            ],
            "fieldPermissions": [
                319
            ],
            "icon": [
                1
            ],
            "label": [
                1
            ],
            "objectPermissions": [
                320
            ],
            "permissionFlagUniversalIdentifiers": [
                1
            ],
            "universalIdentifier": [
                1
            ],
            "__typename": [
                1
            ]
        },
        "MarketplaceAppRoleFieldPermission": {
            "canReadFieldValue": [
                4
            ],
            "canUpdateFieldValue": [
                4
            ],
            "fieldUniversalIdentifier": [
                1
            ],
            "objectUniversalIdentifier": [
                1
            ],
            "universalIdentifier": [
                1
            ],
            "__typename": [
                1
            ]
        },
        "MarketplaceAppRoleObjectPermission": {
            "canDestroyObjectRecords": [
                4
            ],
            "canReadObjectRecords": [
                4
            ],
            "canSoftDeleteObjectRecords": [
                4
            ],
            "canUpdateObjectRecords": [
                4
            ],
            "objectUniversalIdentifier": [
                1
            ],
            "universalIdentifier": [
                1
            ],
            "__typename": [
                1
            ]
        },
        "McpServer": {
            "applicationId": [
                504
            ],
            "createdAt": [
                193
            ],
            "deletedAt": [
                193
            ],
            "hasAuthorizationHeader": [
                4
            ],
            "id": [
                504
            ],
            "isEnabled": [
                4
            ],
            "label": [
                1
            ],
            "name": [
                1
            ],
            "tools": [
                322
            ],
            "toolsSyncError": [
                1
            ],
            "toolsSyncedAt": [
                193
            ],
            "updatedAt": [
                193
            ],
            "url": [
                1
            ],
            "__typename": [
                1
            ]
        },
        "McpServerTool": {
            "annotations": [
                295
            ],
            "description": [
                1
            ],
            "inputSchema": [
                295
            ],
            "name": [
                1
            ],
            "__typename": [
                1
            ]
        },
        "MessageCampaignBodyConfiguration": {
            "configurationType": [
                631
            ],
            "__typename": [
                1
            ]
        },
        "MessageCampaignDetailsConfiguration": {
            "configurationType": [
                631
            ],
            "__typename": [
                1
            ]
        },
        "MessageCampaignSendBlockerDTO": {
            "code": [
                1
            ],
            "message": [
                1
            ],
            "__typename": [
                1
            ]
        },
        "MessageChannel": {
            "connectedAccount": [
                142
            ],
            "connectedAccountId": [
                504
            ],
            "contactAutoCreationPolicy": [
                327
            ],
            "createdAt": [
                193
            ],
            "displayName": [
                1
            ],
            "excludeGroupEmails": [
                4
            ],
            "excludeNonProfessionalEmails": [
                4
            ],
            "handle": [
                1
            ],
            "id": [
                504
            ],
            "importProgress": [
                8
            ],
            "isContactAutoCreationEnabled": [
                4
            ],
            "isSyncEnabled": [
                4
            ],
            "messageFolderImportPolicy": [
                334
            ],
            "pendingGroupEmailsAction": [
                328
            ],
            "syncStage": [
                329
            ],
            "syncStageStartedAt": [
                193
            ],
            "syncStatus": [
                330
            ],
            "syncedAt": [
                193
            ],
            "throttleFailureCount": [
                11
            ],
            "throttleRetryAfter": [
                193
            ],
            "type": [
                331
            ],
            "updatedAt": [
                193
            ],
            "visibility": [
                332
            ],
            "__typename": [
                1
            ]
        },
        "MessageChannelContactAutoCreationPolicy": {},
        "MessageChannelPendingGroupEmailsAction": {},
        "MessageChannelSyncStage": {},
        "MessageChannelSyncStatus": {},
        "MessageChannelType": {},
        "MessageChannelVisibility": {},
        "MessageFolder": {
            "createdAt": [
                193
            ],
            "externalId": [
                1
            ],
            "id": [
                504
            ],
            "isSentFolder": [
                4
            ],
            "isSynced": [
                4
            ],
            "messageChannelId": [
                504
            ],
            "name": [
                1
            ],
            "parentFolderId": [
                1
            ],
            "pendingSyncAction": [
                335
            ],
            "updatedAt": [
                193
            ],
            "__typename": [
                1
            ]
        },
        "MessageFolderImportPolicy": {},
        "MessageFolderPendingSyncAction": {},
        "MessageParticipantRole": {},
        "MessageSuppression": {
            "createdAt": [
                193
            ],
            "emailAddress": [
                1
            ],
            "id": [
                504
            ],
            "reason": [
                339
            ],
            "source": [
                340
            ],
            "unsubscribeTopicId": [
                504
            ],
            "__typename": [
                1
            ]
        },
        "MessageSuppressionList": {
            "records": [
                337
            ],
            "totalCount": [
                8
            ],
            "__typename": [
                1
            ]
        },
        "MessageSuppressionReason": {},
        "MessageSuppressionSource": {},
        "MetadataEvent": {
            "metadataName": [
                1
            ],
            "properties": [
                370
            ],
            "recordId": [
                1
            ],
            "type": [
                342
            ],
            "updatedCollectionHash": [
                1
            ],
            "__typename": [
                1
            ]
        },
        "MetadataEventAction": {},
        "MetadataReadability": {},
        "MetadataTranslation": {
            "canonicalValue": [
                1
            ],
            "locale": [
                1
            ],
            "metadataName": [
                1
            ],
            "objectMetadataId": [
                504
            ],
            "property": [
                1
            ],
            "provenance": [
                346
            ],
            "recordId": [
                504
            ],
            "sourceValue": [
                1
            ],
            "value": [
                1
            ],
            "__typename": [
                1
            ]
        },
        "MetadataTranslationOverrideInput": {
            "locale": [
                1
            ],
            "property": [
                1
            ],
            "value": [
                1
            ],
            "__typename": [
                1
            ]
        },
        "MetadataTranslationProvenance": {},
        "MetadataTranslationsInput": {
            "fieldMetadataId": [
                504
            ],
            "locale": [
                1
            ],
            "objectMetadataId": [
                504
            ],
            "__typename": [
                1
            ]
        },
        "MetadataWritability": {},
        "MinimalMetadata": {
            "collectionHashes": [
                137
            ],
            "objectMetadataItems": [
                350
            ],
            "views": [
                351
            ],
            "__typename": [
                1
            ]
        },
        "MinimalObjectMetadata": {
            "color": [
                1
            ],
            "icon": [
                1
            ],
            "id": [
                504
            ],
            "isActive": [
                4
            ],
            "isRemote": [
                4
            ],
            "isSystem": [
                4
            ],
            "labelPlural": [
                1
            ],
            "labelSingular": [
                1
            ],
            "namePlural": [
                1
            ],
            "nameSingular": [
                1
            ],
            "__typename": [
                1
            ]
        },
        "MinimalView": {
            "id": [
                504
            ],
            "key": [
                623
            ],
            "objectMetadataId": [
                504
            ],
            "type": [
                627
            ],
            "__typename": [
                1
            ]
        },
        "ModelFamily": {},
        "Mutation": {
            "activateSkill": [
                471,
                {
                    "id": [
                        504,
                        "UUID!"
                    ]
                }
            ],
            "activateWorkspace": [
                636,
                {
                    "data": [
                        0,
                        "ActivateWorkspaceInput!"
                    ]
                }
            ],
            "addAgentChatMessageReaction": [
                16,
                {
                    "emoji": [
                        1,
                        "String!"
                    ],
                    "messageId": [
                        504,
                        "UUID!"
                    ]
                }
            ],
            "addQueryToEventStream": [
                4,
                {
                    "input": [
                        2,
                        "AddQuerySubscriptionInput!"
                    ]
                }
            ],
            "assignAgentChatThread": [
                4,
                {
                    "assigneeWorkspaceMemberId": [
                        504
                    ],
                    "threadId": [
                        504,
                        "UUID!"
                    ]
                }
            ],
            "assignRoleToAgent": [
                4,
                {
                    "agentId": [
                        504,
                        "UUID!"
                    ],
                    "roleId": [
                        504,
                        "UUID!"
                    ]
                }
            ],
            "assignRoleToApiKey": [
                4,
                {
                    "apiKeyId": [
                        504,
                        "UUID!"
                    ],
                    "roleId": [
                        504,
                        "UUID!"
                    ]
                }
            ],
            "authorizeApp": [
                70,
                {
                    "clientId": [
                        1,
                        "String!"
                    ],
                    "codeChallenge": [
                        1
                    ],
                    "issuer": [
                        1
                    ],
                    "redirectUrl": [
                        1,
                        "String!"
                    ],
                    "scope": [
                        1
                    ],
                    "state": [
                        1
                    ]
                }
            ],
            "cancelMessageCampaign": [
                121,
                {
                    "input": [
                        120,
                        "CancelMessageCampaignInput!"
                    ]
                }
            ],
            "cancelSwitchBillingInterval": [
                108
            ],
            "cancelSwitchBillingPlan": [
                108
            ],
            "cancelSwitchResourceCreditPrice": [
                108
            ],
            "checkCustomDomainValidRecords": [
                214
            ],
            "checkPublicDomainValidRecords": [
                214,
                {
                    "domain": [
                        1,
                        "String!"
                    ]
                }
            ],
            "checkoutSession": [
                101,
                {
                    "plan": [
                        92,
                        "BillingPlanKey!"
                    ],
                    "recurringInterval": [
                        477,
                        "SubscriptionInterval!"
                    ],
                    "requirePaymentMethod": [
                        4,
                        "Boolean!"
                    ],
                    "successUrlPath": [
                        1
                    ]
                }
            ],
            "claimApplicationRegistrationOwnership": [
                56,
                {
                    "applicationRegistrationId": [
                        1,
                        "String!"
                    ]
                }
            ],
            "completeAppTarballUpload": [
                56,
                {
                    "fileId": [
                        504,
                        "UUID!"
                    ]
                }
            ],
            "completeApplicationFileUploads": [
                141,
                {
                    "applicationUniversalIdentifier": [
                        1,
                        "String!"
                    ],
                    "fileIds": [
                        504,
                        "[UUID!]!"
                    ]
                }
            ],
            "completeBookCallOnboardingStep": [
                376,
                {
                    "hasBookedCall": [
                        4,
                        "Boolean!"
                    ],
                    "isAutoSkipped": [
                        4,
                        "Boolean!"
                    ]
                }
            ],
            "completeFileUpload": [
                263,
                {
                    "fileId": [
                        1,
                        "String!"
                    ]
                }
            ],
            "completeNewWorkspaceLogoUpload": [
                263,
                {
                    "fileId": [
                        1,
                        "String!"
                    ],
                    "workspaceId": [
                        1,
                        "String!"
                    ]
                }
            ],
            "completeWorkspaceLogoUpload": [
                263,
                {
                    "fileId": [
                        1,
                        "String!"
                    ]
                }
            ],
            "completeWorkspaceMemberProfilePictureUpload": [
                263,
                {
                    "fileId": [
                        1,
                        "String!"
                    ]
                }
            ],
            "createApiKey": [
                29,
                {
                    "input": [
                        149,
                        "CreateApiKeyInput!"
                    ]
                }
            ],
            "createAppMessageChannel": [
                326,
                {
                    "input": [
                        150,
                        "CreateAppMessageChannelInput!"
                    ]
                }
            ],
            "createApplicationFileUploads": [
                151,
                {
                    "applicationUniversalIdentifier": [
                        1,
                        "String!"
                    ],
                    "files": [
                        50,
                        "[ApplicationFileUploadRequestInput!]!"
                    ]
                }
            ],
            "createApplicationRegistration": [
                152,
                {
                    "input": [
                        153,
                        "CreateApplicationRegistrationInput!"
                    ]
                }
            ],
            "createApprovedAccessDomain": [
                64,
                {
                    "input": [
                        154,
                        "CreateApprovedAccessDomainInput!"
                    ]
                }
            ],
            "createBillingPaymentMethodSetupIntent": [
                90
            ],
            "createCalendarEvent": [
                156,
                {
                    "input": [
                        155,
                        "CreateCalendarEventInput!"
                    ]
                }
            ],
            "createChatThread": [
                9
            ],
            "createCommandMenuItem": [
                138,
                {
                    "input": [
                        157,
                        "CreateCommandMenuItemInput!"
                    ]
                }
            ],
            "createDevelopmentApplication": [
                212,
                {
                    "name": [
                        1,
                        "String!"
                    ],
                    "universalIdentifier": [
                        1,
                        "String!"
                    ]
                }
            ],
            "createEmailGroupChannel": [
                159,
                {
                    "input": [
                        158,
                        "CreateEmailGroupChannelInput!"
                    ]
                }
            ],
            "createEmailingDomain": [
                223,
                {
                    "input": [
                        160,
                        "CreateEmailingDomainInput!"
                    ]
                }
            ],
            "createFileUpload": [
                262,
                {
                    "fieldMetadataId": [
                        1
                    ],
                    "fieldMetadataUniversalIdentifier": [
                        1
                    ],
                    "fileFolder": [
                        261,
                        "FileFolder!"
                    ],
                    "filename": [
                        1,
                        "String!"
                    ],
                    "size": [
                        11,
                        "Float!"
                    ]
                }
            ],
            "createFrontComponent": [
                268,
                {
                    "input": [
                        162,
                        "CreateFrontComponentInput!"
                    ]
                }
            ],
            "createManyNavigationMenuItems": [
                355,
                {
                    "inputs": [
                        168,
                        "[CreateNavigationMenuItemInput!]!"
                    ]
                }
            ],
            "createManyViewFieldGroups": [
                617,
                {
                    "inputs": [
                        182,
                        "[CreateViewFieldGroupInput!]!"
                    ]
                }
            ],
            "createManyViewFields": [
                616,
                {
                    "inputs": [
                        183,
                        "[CreateViewFieldInput!]!"
                    ]
                }
            ],
            "createManyViewGroups": [
                622,
                {
                    "inputs": [
                        186,
                        "[CreateViewGroupInput!]!"
                    ]
                }
            ],
            "createMcpServer": [
                321,
                {
                    "input": [
                        166,
                        "CreateMcpServerInput!"
                    ]
                }
            ],
            "createMessageSuppression": [
                337,
                {
                    "input": [
                        167,
                        "CreateMessageSuppressionInput!"
                    ]
                }
            ],
            "createNavigationMenuItem": [
                355,
                {
                    "input": [
                        168,
                        "CreateNavigationMenuItemInput!"
                    ]
                }
            ],
            "createNewWorkspaceLogoUpload": [
                262,
                {
                    "filename": [
                        1,
                        "String!"
                    ],
                    "size": [
                        11,
                        "Float!"
                    ],
                    "workspaceId": [
                        1,
                        "String!"
                    ]
                }
            ],
            "createOIDCIdentityProvider": [
                468,
                {
                    "input": [
                        466,
                        "SetupOIDCSsoInput!"
                    ]
                }
            ],
            "createObjectEvent": [
                26,
                {
                    "event": [
                        1,
                        "String!"
                    ],
                    "objectMetadataId": [
                        504,
                        "UUID!"
                    ],
                    "properties": [
                        295
                    ],
                    "recordId": [
                        504,
                        "UUID!"
                    ]
                }
            ],
            "createOneAgent": [
                3,
                {
                    "input": [
                        148,
                        "CreateAgentInput!"
                    ]
                }
            ],
            "createOneField": [
                248,
                {
                    "input": [
                        170,
                        "CreateOneFieldMetadataInput!"
                    ]
                }
            ],
            "createOneIndex": [
                284,
                {
                    "input": [
                        171,
                        "CreateOneIndexInput!"
                    ]
                }
            ],
            "createOneLogicFunction": [
                307,
                {
                    "input": [
                        165,
                        "CreateLogicFunctionFromSourceInput!"
                    ]
                }
            ],
            "createOneObject": [
                358,
                {
                    "input": [
                        172,
                        "CreateOneObjectInput!"
                    ]
                }
            ],
            "createOneRole": [
                431,
                {
                    "createRoleInput": [
                        177,
                        "CreateRoleInput!"
                    ]
                }
            ],
            "createPageLayout": [
                379,
                {
                    "input": [
                        173,
                        "CreatePageLayoutInput!"
                    ]
                }
            ],
            "createPageLayoutTab": [
                380,
                {
                    "input": [
                        174,
                        "CreatePageLayoutTabInput!"
                    ]
                }
            ],
            "createPageLayoutWidget": [
                383,
                {
                    "input": [
                        175,
                        "CreatePageLayoutWidgetInput!"
                    ]
                }
            ],
            "createPublicDomain": [
                402,
                {
                    "applicationId": [
                        1,
                        "String!"
                    ],
                    "domain": [
                        1,
                        "String!"
                    ]
                }
            ],
            "createSAMLIdentityProvider": [
                468,
                {
                    "input": [
                        467,
                        "SetupSAMLSsoInput!"
                    ]
                }
            ],
            "createSkill": [
                471,
                {
                    "input": [
                        178,
                        "CreateSkillInput!"
                    ]
                }
            ],
            "createSubscriptionPaymentIntent": [
                90,
                {
                    "idempotencyKey": [
                        1,
                        "String!"
                    ],
                    "plan": [
                        92,
                        "BillingPlanKey!"
                    ],
                    "recurringInterval": [
                        477,
                        "SubscriptionInterval!"
                    ],
                    "requirePaymentMethod": [
                        4,
                        "Boolean!"
                    ],
                    "successUrlPath": [
                        1
                    ]
                }
            ],
            "createUnsubscribeTopic": [
                507,
                {
                    "input": [
                        179,
                        "CreateUnsubscribeTopicInput!"
                    ]
                }
            ],
            "createUsageLimit": [
                588,
                {
                    "input": [
                        180,
                        "CreateUsageLimitInput!"
                    ]
                }
            ],
            "createValidationRule": [
                608,
                {
                    "input": [
                        181,
                        "CreateValidationRuleInput!"
                    ]
                }
            ],
            "createView": [
                613,
                {
                    "input": [
                        187,
                        "CreateViewInput!"
                    ]
                }
            ],
            "createViewField": [
                616,
                {
                    "input": [
                        183,
                        "CreateViewFieldInput!"
                    ]
                }
            ],
            "createViewFieldGroup": [
                617,
                {
                    "input": [
                        182,
                        "CreateViewFieldGroupInput!"
                    ]
                }
            ],
            "createViewFilter": [
                618,
                {
                    "input": [
                        185,
                        "CreateViewFilterInput!"
                    ]
                }
            ],
            "createViewFilterGroup": [
                619,
                {
                    "input": [
                        184,
                        "CreateViewFilterGroupInput!"
                    ]
                }
            ],
            "createViewGroup": [
                622,
                {
                    "input": [
                        186,
                        "CreateViewGroupInput!"
                    ]
                }
            ],
            "createViewSort": [
                625,
                {
                    "input": [
                        188,
                        "CreateViewSortInput!"
                    ]
                }
            ],
            "createWebhook": [
                629,
                {
                    "input": [
                        189,
                        "CreateWebhookInput!"
                    ]
                }
            ],
            "deactivateSkill": [
                471,
                {
                    "id": [
                        504,
                        "UUID!"
                    ]
                }
            ],
            "deleteAppKeyValue": [
                4,
                {
                    "key": [
                        1,
                        "String!"
                    ],
                    "scope": [
                        34
                    ]
                }
            ],
            "deleteAppMessageChannel": [
                326,
                {
                    "id": [
                        504,
                        "UUID!"
                    ]
                }
            ],
            "deleteApplicationRegistration": [
                4,
                {
                    "id": [
                        1,
                        "String!"
                    ]
                }
            ],
            "deleteApprovedAccessDomain": [
                4,
                {
                    "input": [
                        194,
                        "DeleteApprovedAccessDomainInput!"
                    ]
                }
            ],
            "deleteCommandMenuItem": [
                138,
                {
                    "id": [
                        504,
                        "UUID!"
                    ]
                }
            ],
            "deleteConnectedAccount": [
                142,
                {
                    "id": [
                        504,
                        "UUID!"
                    ]
                }
            ],
            "deleteCurrentWorkspace": [
                636
            ],
            "deleteEmailGroupChannel": [
                326,
                {
                    "id": [
                        504,
                        "UUID!"
                    ]
                }
            ],
            "deleteEmailingDomain": [
                4,
                {
                    "id": [
                        1,
                        "String!"
                    ]
                }
            ],
            "deleteFrontComponent": [
                268,
                {
                    "id": [
                        504,
                        "UUID!"
                    ]
                }
            ],
            "deleteManyNavigationMenuItems": [
                355,
                {
                    "ids": [
                        504,
                        "[UUID!]!"
                    ]
                }
            ],
            "deleteMcpServer": [
                321,
                {
                    "id": [
                        504,
                        "UUID!"
                    ]
                }
            ],
            "deleteMessageSuppression": [
                4,
                {
                    "id": [
                        504,
                        "UUID!"
                    ]
                }
            ],
            "deleteNavigationMenuItem": [
                355,
                {
                    "id": [
                        504,
                        "UUID!"
                    ]
                }
            ],
            "deleteOneAgent": [
                3,
                {
                    "input": [
                        13,
                        "AgentIdInput!"
                    ]
                }
            ],
            "deleteOneField": [
                248,
                {
                    "input": [
                        195,
                        "DeleteOneFieldInput!"
                    ]
                }
            ],
            "deleteOneIndex": [
                284,
                {
                    "input": [
                        196,
                        "DeleteOneIndexInput!"
                    ]
                }
            ],
            "deleteOneLogicFunction": [
                307,
                {
                    "input": [
                        311,
                        "LogicFunctionIdInput!"
                    ]
                }
            ],
            "deleteOneObject": [
                358,
                {
                    "input": [
                        197,
                        "DeleteOneObjectInput!"
                    ]
                }
            ],
            "deleteOneRole": [
                1,
                {
                    "roleId": [
                        504,
                        "UUID!"
                    ]
                }
            ],
            "deletePublicDomain": [
                4,
                {
                    "domain": [
                        1,
                        "String!"
                    ]
                }
            ],
            "deleteQueuedChatMessage": [
                4,
                {
                    "messageId": [
                        504,
                        "UUID!"
                    ]
                }
            ],
            "deleteSSOIdentityProvider": [
                198,
                {
                    "input": [
                        199,
                        "DeleteSsoInput!"
                    ]
                }
            ],
            "deleteSkill": [
                471,
                {
                    "id": [
                        504,
                        "UUID!"
                    ]
                }
            ],
            "deleteTwoFactorAuthenticationMethod": [
                200,
                {
                    "twoFactorAuthenticationMethodId": [
                        504,
                        "UUID!"
                    ]
                }
            ],
            "deleteUnsubscribeTopic": [
                4,
                {
                    "id": [
                        1,
                        "String!"
                    ]
                }
            ],
            "deleteUsageLimit": [
                4,
                {
                    "usageLimitId": [
                        504,
                        "UUID!"
                    ]
                }
            ],
            "deleteUser": [
                601
            ],
            "deleteUserFromWorkspace": [
                605,
                {
                    "workspaceMemberIdToDelete": [
                        1,
                        "String!"
                    ]
                }
            ],
            "deleteValidationRule": [
                608,
                {
                    "id": [
                        504,
                        "UUID!"
                    ]
                }
            ],
            "deleteView": [
                4,
                {
                    "id": [
                        1,
                        "String!"
                    ]
                }
            ],
            "deleteViewField": [
                616,
                {
                    "input": [
                        202,
                        "DeleteViewFieldInput!"
                    ]
                }
            ],
            "deleteViewFieldGroup": [
                617,
                {
                    "input": [
                        201,
                        "DeleteViewFieldGroupInput!"
                    ]
                }
            ],
            "deleteViewFilter": [
                618,
                {
                    "input": [
                        203,
                        "DeleteViewFilterInput!"
                    ]
                }
            ],
            "deleteViewFilterGroup": [
                4,
                {
                    "id": [
                        1,
                        "String!"
                    ]
                }
            ],
            "deleteViewGroup": [
                622,
                {
                    "input": [
                        204,
                        "DeleteViewGroupInput!"
                    ]
                }
            ],
            "deleteViewSort": [
                4,
                {
                    "input": [
                        205,
                        "DeleteViewSortInput!"
                    ]
                }
            ],
            "deleteWebhook": [
                629,
                {
                    "id": [
                        504,
                        "UUID!"
                    ]
                }
            ],
            "deleteWorkspaceInvitation": [
                1,
                {
                    "appTokenId": [
                        1,
                        "String!"
                    ]
                }
            ],
            "destroyPageLayout": [
                4,
                {
                    "id": [
                        1,
                        "String!"
                    ]
                }
            ],
            "destroyPageLayoutTab": [
                4,
                {
                    "id": [
                        1,
                        "String!"
                    ]
                }
            ],
            "destroyPageLayoutWidget": [
                4,
                {
                    "id": [
                        1,
                        "String!"
                    ]
                }
            ],
            "destroyView": [
                4,
                {
                    "id": [
                        1,
                        "String!"
                    ]
                }
            ],
            "destroyViewField": [
                616,
                {
                    "input": [
                        208,
                        "DestroyViewFieldInput!"
                    ]
                }
            ],
            "destroyViewFieldGroup": [
                617,
                {
                    "input": [
                        207,
                        "DestroyViewFieldGroupInput!"
                    ]
                }
            ],
            "destroyViewFilter": [
                618,
                {
                    "input": [
                        209,
                        "DestroyViewFilterInput!"
                    ]
                }
            ],
            "destroyViewFilterGroup": [
                4,
                {
                    "id": [
                        1,
                        "String!"
                    ]
                }
            ],
            "destroyViewGroup": [
                622,
                {
                    "input": [
                        210,
                        "DestroyViewGroupInput!"
                    ]
                }
            ],
            "destroyViewSort": [
                4,
                {
                    "input": [
                        211,
                        "DestroyViewSortInput!"
                    ]
                }
            ],
            "disconnectConnectedAccount": [
                142,
                {
                    "id": [
                        504,
                        "UUID!"
                    ]
                }
            ],
            "duplicateDashboard": [
                215,
                {
                    "id": [
                        504,
                        "UUID!"
                    ]
                }
            ],
            "duplicateMessageList": [
                216,
                {
                    "id": [
                        504,
                        "UUID!"
                    ]
                }
            ],
            "editSSOIdentityProvider": [
                217,
                {
                    "input": [
                        218,
                        "EditSsoInput!"
                    ]
                }
            ],
            "emailPasswordResetLink": [
                221,
                {
                    "captchaToken": [
                        1
                    ],
                    "email": [
                        1,
                        "String!"
                    ],
                    "workspaceId": [
                        504
                    ]
                }
            ],
            "endSubscriptionTrialPeriod": [
                85
            ],
            "enqueueJob": [
                230,
                {
                    "input": [
                        228,
                        "EnqueueJobInput!"
                    ]
                }
            ],
            "enqueueJobs": [
                232,
                {
                    "input": [
                        231,
                        "EnqueueJobsInput!"
                    ]
                }
            ],
            "enrichWorkspaceCompany": [
                640
            ],
            "executeOneLogicFunction": [
                309,
                {
                    "input": [
                        245,
                        "ExecuteOneLogicFunctionInput!"
                    ]
                }
            ],
            "generateApiKeyToken": [
                31,
                {
                    "apiKeyId": [
                        504,
                        "UUID!"
                    ],
                    "expiresAt": [
                        1,
                        "String!"
                    ]
                }
            ],
            "generateFrontComponentApplicationTokenPair": [
                61,
                {
                    "applicationId": [
                        504,
                        "UUID!"
                    ]
                }
            ],
            "generatePlaygroundToken": [
                67
            ],
            "generateTransientToken": [
                487
            ],
            "generateTwoFactorAuthenticationRecoveryCode": [
                501,
                {
                    "otp": [
                        1
                    ],
                    "userId": [
                        504,
                        "UUID!"
                    ]
                }
            ],
            "getAuthTokensFromLoginToken": [
                69,
                {
                    "loginToken": [
                        1,
                        "String!"
                    ],
                    "origin": [
                        1,
                        "String!"
                    ]
                }
            ],
            "getAuthTokensFromOTP": [
                69,
                {
                    "captchaToken": [
                        1
                    ],
                    "loginToken": [
                        1,
                        "String!"
                    ],
                    "origin": [
                        1,
                        "String!"
                    ],
                    "otp": [
                        1,
                        "String!"
                    ]
                }
            ],
            "getAuthTokensFromSSOExchangeToken": [
                69,
                {
                    "ssoExchangeToken": [
                        1,
                        "String!"
                    ]
                }
            ],
            "getAuthTokensFromTwoFactorAuthenticationRecoveryCode": [
                502,
                {
                    "captchaToken": [
                        1
                    ],
                    "loginToken": [
                        1,
                        "String!"
                    ],
                    "origin": [
                        1,
                        "String!"
                    ],
                    "recoveryCode": [
                        1,
                        "String!"
                    ]
                }
            ],
            "getAuthorizationUrlForSSO": [
                273,
                {
                    "input": [
                        274,
                        "GetAuthorizationUrlForSSOInput!"
                    ]
                }
            ],
            "getLoginTokenFromCredentials": [
                314,
                {
                    "captchaToken": [
                        1
                    ],
                    "email": [
                        1,
                        "String!"
                    ],
                    "locale": [
                        1
                    ],
                    "origin": [
                        1,
                        "String!"
                    ],
                    "password": [
                        1,
                        "String!"
                    ],
                    "verifyEmailRedirectPath": [
                        1
                    ]
                }
            ],
            "goBackToPreviousOnboardingStep": [
                375
            ],
            "grantApplicationCapabilities": [
                39,
                {
                    "input": [
                        275,
                        "GrantApplicationCapabilitiesInput!"
                    ]
                }
            ],
            "impersonate": [
                283,
                {
                    "userId": [
                        504,
                        "UUID!"
                    ],
                    "workspaceId": [
                        504,
                        "UUID!"
                    ]
                }
            ],
            "ingestAppMessages": [
                290,
                {
                    "input": [
                        289,
                        "IngestAppMessagesInput!"
                    ]
                }
            ],
            "initiateOTPProvisioning": [
                292,
                {
                    "loginToken": [
                        1,
                        "String!"
                    ],
                    "origin": [
                        1,
                        "String!"
                    ]
                }
            ],
            "initiateOTPProvisioningForAuthenticatedUser": [
                292
            ],
            "installApplication": [
                37,
                {
                    "universalIdentifier": [
                        1,
                        "String!"
                    ],
                    "version": [
                        1
                    ]
                }
            ],
            "installMarketplaceApp": [
                4,
                {
                    "universalIdentifier": [
                        1,
                        "String!"
                    ],
                    "version": [
                        1
                    ]
                }
            ],
            "refreshEnterpriseValidityToken": [
                4
            ],
            "releaseEnterpriseServerBinding": [
                233
            ],
            "removeAgentChatMessageReaction": [
                16,
                {
                    "emoji": [
                        1,
                        "String!"
                    ],
                    "messageId": [
                        504,
                        "UUID!"
                    ]
                }
            ],
            "removeQueryFromEventStream": [
                4,
                {
                    "input": [
                        426,
                        "RemoveQueryFromEventStreamInput!"
                    ]
                }
            ],
            "removeRecordShare": [
                418,
                {
                    "principal": [
                        415,
                        "RecordSharePrincipalInput!"
                    ],
                    "target": [
                        423,
                        "RecordTargetInput!"
                    ]
                }
            ],
            "removeRoleFromAgent": [
                4,
                {
                    "agentId": [
                        504,
                        "UUID!"
                    ]
                }
            ],
            "renewApplicationToken": [
                61,
                {
                    "applicationRefreshToken": [
                        1,
                        "String!"
                    ]
                }
            ],
            "renewToken": [
                69,
                {
                    "appToken": [
                        1,
                        "String!"
                    ]
                }
            ],
            "reportAppConnectionAuthFailure": [
                4,
                {
                    "input": [
                        427,
                        "ReportAppConnectionAuthFailureInput!"
                    ]
                }
            ],
            "resendEmailVerificationToken": [
                428,
                {
                    "email": [
                        1,
                        "String!"
                    ],
                    "origin": [
                        1,
                        "String!"
                    ]
                }
            ],
            "resendWorkspaceInvitation": [
                458,
                {
                    "appTokenId": [
                        1,
                        "String!"
                    ]
                }
            ],
            "resetCommandMenuItem": [
                138,
                {
                    "id": [
                        504,
                        "UUID!"
                    ]
                }
            ],
            "resetPageLayoutTabToDefault": [
                380,
                {
                    "id": [
                        1,
                        "String!"
                    ]
                }
            ],
            "resetPageLayoutToDefault": [
                379,
                {
                    "id": [
                        1,
                        "String!"
                    ]
                }
            ],
            "resetPageLayoutWidgetToDefault": [
                383,
                {
                    "id": [
                        1,
                        "String!"
                    ]
                }
            ],
            "resetTimelineActivityType": [
                482,
                {
                    "id": [
                        504,
                        "UUID!"
                    ]
                }
            ],
            "retryChatMessage": [
                451,
                {
                    "modelId": [
                        1
                    ],
                    "threadId": [
                        504,
                        "UUID!"
                    ]
                }
            ],
            "revokeAllOtherUserSessions": [
                8
            ],
            "revokeApiKey": [
                29,
                {
                    "input": [
                        429,
                        "RevokeApiKeyInput!"
                    ]
                }
            ],
            "revokeApplicationAuthorization": [
                4,
                {
                    "applicationAuthorizationId": [
                        504,
                        "UUID!"
                    ]
                }
            ],
            "revokeTwoFactorAuthenticationRecoveryCode": [
                4,
                {
                    "userId": [
                        504,
                        "UUID!"
                    ]
                }
            ],
            "revokeUserSession": [
                4,
                {
                    "userSessionId": [
                        504,
                        "UUID!"
                    ]
                }
            ],
            "rotateApplicationRegistrationClientSecret": [
                433,
                {
                    "id": [
                        1,
                        "String!"
                    ]
                }
            ],
            "runAgent": [
                444,
                {
                    "input": [
                        440,
                        "RunAgentInput!"
                    ]
                }
            ],
            "runApplicationHealthCheck": [
                53,
                {
                    "applicationId": [
                        504,
                        "UUID!"
                    ]
                }
            ],
            "saveImapSmtpCaldavAccount": [
                280,
                {
                    "connectionParameters": [
                        219,
                        "EmailAccountConnectionParameters!"
                    ],
                    "handle": [
                        1,
                        "String!"
                    ],
                    "id": [
                        504
                    ]
                }
            ],
            "sendChatMessage": [
                451,
                {
                    "browsingContext": [
                        295
                    ],
                    "fileAttachments": [
                        260,
                        "[FileAttachmentInput!]"
                    ],
                    "mentionedWorkspaceMemberIds": [
                        504,
                        "[UUID!]"
                    ],
                    "messageId": [
                        504,
                        "UUID!"
                    ],
                    "modelId": [
                        1
                    ],
                    "shouldAssistantReply": [
                        4
                    ],
                    "text": [
                        1,
                        "String!"
                    ],
                    "threadId": [
                        504,
                        "UUID!"
                    ]
                }
            ],
            "sendEmail": [
                454,
                {
                    "input": [
                        453,
                        "SendEmailInput!"
                    ]
                }
            ],
            "sendInboxMessage": [
                457,
                {
                    "input": [
                        456,
                        "SendInboxMessageInput!"
                    ]
                }
            ],
            "sendInvitations": [
                458,
                {
                    "emails": [
                        1,
                        "[String!]!"
                    ],
                    "roleId": [
                        504
                    ]
                }
            ],
            "sendMessageCampaign": [
                460,
                {
                    "input": [
                        459,
                        "SendMessageCampaignInput!"
                    ]
                }
            ],
            "sendMessageCampaignTest": [
                455,
                {
                    "input": [
                        461,
                        "SendMessageCampaignTestInput!"
                    ]
                }
            ],
            "setAppKeyValue": [
                33,
                {
                    "input": [
                        463,
                        "SetAppKeyValueInput!"
                    ]
                }
            ],
            "setEnterpriseKey": [
                233,
                {
                    "enterpriseKey": [
                        1,
                        "String!"
                    ]
                }
            ],
            "setRecordGeneralAccess": [
                418,
                {
                    "accessLevel": [
                        414,
                        "RecordShareAccessLevel!"
                    ],
                    "target": [
                        423,
                        "RecordTargetInput!"
                    ]
                }
            ],
            "setRecordShare": [
                418,
                {
                    "accessLevel": [
                        414,
                        "RecordShareAccessLevel!"
                    ],
                    "principal": [
                        415,
                        "RecordSharePrincipalInput!"
                    ],
                    "target": [
                        423,
                        "RecordTargetInput!"
                    ]
                }
            ],
            "setResourceCreditSubscriptionPrice": [
                108,
                {
                    "priceId": [
                        1,
                        "String!"
                    ]
                }
            ],
            "signIn": [
                74,
                {
                    "captchaToken": [
                        1
                    ],
                    "email": [
                        1,
                        "String!"
                    ],
                    "locale": [
                        1
                    ],
                    "password": [
                        1,
                        "String!"
                    ],
                    "verifyEmailRedirectPath": [
                        1
                    ]
                }
            ],
            "signOut": [
                4,
                {
                    "refreshToken": [
                        1
                    ]
                }
            ],
            "signUp": [
                74,
                {
                    "captchaToken": [
                        1
                    ],
                    "email": [
                        1,
                        "String!"
                    ],
                    "locale": [
                        1
                    ],
                    "password": [
                        1,
                        "String!"
                    ],
                    "verifyEmailRedirectPath": [
                        1
                    ]
                }
            ],
            "signUpInNewWorkspace": [
                469,
                {
                    "input": [
                        470
                    ]
                }
            ],
            "signUpInWorkspace": [
                469,
                {
                    "captchaToken": [
                        1
                    ],
                    "email": [
                        1,
                        "String!"
                    ],
                    "locale": [
                        1
                    ],
                    "password": [
                        1,
                        "String!"
                    ],
                    "verifyEmailRedirectPath": [
                        1
                    ],
                    "workspaceId": [
                        504
                    ],
                    "workspaceInviteHash": [
                        1
                    ],
                    "workspacePersonalInviteToken": [
                        1
                    ]
                }
            ],
            "skipSyncEmailOnboardingStep": [
                376,
                {
                    "isAutoSkipped": [
                        4,
                        "Boolean!"
                    ]
                }
            ],
            "startChannelSync": [
                124,
                {
                    "connectedAccountId": [
                        504,
                        "UUID!"
                    ]
                }
            ],
            "startWorkspaceSetupChat": [
                473,
                {
                    "companyContext": [
                        295
                    ],
                    "personContext": [
                        295
                    ]
                }
            ],
            "stopAgentChatStream": [
                4,
                {
                    "threadId": [
                        504,
                        "UUID!"
                    ]
                }
            ],
            "stopImpersonation": [
                474
            ],
            "switchBillingPlan": [
                108,
                {
                    "plan": [
                        92
                    ]
                }
            ],
            "switchSubscriptionInterval": [
                108
            ],
            "syncApplication": [
                650,
                {
                    "dryRun": [
                        4
                    ],
                    "inferDeletionFromMissingEntities": [
                        4
                    ],
                    "manifest": [
                        295,
                        "JSON!"
                    ]
                }
            ],
            "syncMarketplaceCatalog": [
                4
            ],
            "trackAnalytics": [
                26,
                {
                    "event": [
                        1
                    ],
                    "name": [
                        1
                    ],
                    "properties": [
                        295
                    ],
                    "type": [
                        27,
                        "AnalyticsType!"
                    ]
                }
            ],
            "transferApplicationRegistrationOwnership": [
                56,
                {
                    "applicationRegistrationId": [
                        1,
                        "String!"
                    ],
                    "targetWorkspaceSubdomain": [
                        1,
                        "String!"
                    ]
                }
            ],
            "triggerAddPeopleToMessageListJob": [
                489,
                {
                    "input": [
                        488,
                        "TriggerAddPeopleToMessageListJobInput!"
                    ]
                }
            ],
            "triggerInstallApplication": [
                493,
                {
                    "input": [
                        490,
                        "TriggerInstallApplicationInput!"
                    ]
                }
            ],
            "triggerInstallApplicationJob": [
                492,
                {
                    "input": [
                        491,
                        "TriggerInstallApplicationJobInput!"
                    ]
                }
            ],
            "triggerUninstallApplication": [
                497,
                {
                    "input": [
                        494,
                        "TriggerUninstallApplicationInput!"
                    ]
                }
            ],
            "triggerUninstallApplicationJob": [
                496,
                {
                    "input": [
                        495,
                        "TriggerUninstallApplicationJobInput!"
                    ]
                }
            ],
            "triggerUpgradeApplication": [
                499,
                {
                    "input": [
                        498,
                        "TriggerUpgradeApplicationInput!"
                    ]
                }
            ],
            "uninstallApplication": [
                4,
                {
                    "universalIdentifier": [
                        1,
                        "String!"
                    ]
                }
            ],
            "updateAgentChatThreadInboxState": [
                12,
                {
                    "action": [
                        6,
                        "AgentChatInboxAction!"
                    ],
                    "snoozedUntil": [
                        193
                    ],
                    "threadIds": [
                        504,
                        "[UUID!]!"
                    ]
                }
            ],
            "updateApiKey": [
                29,
                {
                    "input": [
                        510,
                        "UpdateApiKeyInput!"
                    ]
                }
            ],
            "updateAppMessageChannel": [
                326,
                {
                    "input": [
                        511,
                        "UpdateAppMessageChannelInput!"
                    ]
                }
            ],
            "updateApplication": [
                37,
                {
                    "id": [
                        504,
                        "UUID!"
                    ],
                    "input": [
                        512,
                        "UpdateApplicationInput!"
                    ]
                }
            ],
            "updateApplicationRegistration": [
                56,
                {
                    "input": [
                        513,
                        "UpdateApplicationRegistrationInput!"
                    ]
                }
            ],
            "updateApplicationRegistrationVariable": [
                60,
                {
                    "input": [
                        515,
                        "UpdateApplicationRegistrationVariableInput!"
                    ]
                }
            ],
            "updateCalendarChannel": [
                111,
                {
                    "input": [
                        517,
                        "UpdateCalendarChannelInput!"
                    ]
                }
            ],
            "updateCommandMenuItem": [
                138,
                {
                    "input": [
                        519,
                        "UpdateCommandMenuItemInput!"
                    ]
                }
            ],
            "updateEmailGroupChannel": [
                326,
                {
                    "input": [
                        520,
                        "UpdateEmailGroupChannelInput!"
                    ]
                }
            ],
            "updateFrontComponent": [
                268,
                {
                    "input": [
                        522,
                        "UpdateFrontComponentInput!"
                    ]
                }
            ],
            "updateLabPublicFeatureFlag": [
                246,
                {
                    "input": [
                        524,
                        "UpdateLabPublicFeatureFlagInput!"
                    ]
                }
            ],
            "updateManyNavigationMenuItems": [
                355,
                {
                    "inputs": [
                        537,
                        "[UpdateOneNavigationMenuItemInput!]!"
                    ]
                }
            ],
            "updateManyObjects": [
                358,
                {
                    "inputs": [
                        538,
                        "[UpdateOneObjectInput!]!"
                    ]
                }
            ],
            "updateManyViewGroups": [
                622,
                {
                    "inputs": [
                        560,
                        "[UpdateViewGroupInput!]!"
                    ]
                }
            ],
            "updateMcpServer": [
                321,
                {
                    "input": [
                        527,
                        "UpdateMcpServerInput!"
                    ]
                }
            ],
            "updateMessageChannel": [
                326,
                {
                    "input": [
                        529,
                        "UpdateMessageChannelInput!"
                    ]
                }
            ],
            "updateMessageFolder": [
                333,
                {
                    "input": [
                        531,
                        "UpdateMessageFolderInput!"
                    ]
                }
            ],
            "updateMessageFolders": [
                333,
                {
                    "input": [
                        533,
                        "UpdateMessageFoldersInput!"
                    ]
                }
            ],
            "updateMyUserApplicationVariable": [
                4,
                {
                    "applicationUniversalIdentifier": [
                        1,
                        "String!"
                    ],
                    "key": [
                        1,
                        "String!"
                    ],
                    "value": [
                        1,
                        "String!"
                    ]
                }
            ],
            "updateNavigationMenuItem": [
                355,
                {
                    "input": [
                        537,
                        "UpdateOneNavigationMenuItemInput!"
                    ]
                }
            ],
            "updateOneAgent": [
                3,
                {
                    "input": [
                        509,
                        "UpdateAgentInput!"
                    ]
                }
            ],
            "updateOneApplicationVariable": [
                4,
                {
                    "applicationId": [
                        504
                    ],
                    "key": [
                        1,
                        "String!"
                    ],
                    "value": [
                        1,
                        "String!"
                    ]
                }
            ],
            "updateOneField": [
                248,
                {
                    "input": [
                        536,
                        "UpdateOneFieldMetadataInput!"
                    ]
                }
            ],
            "updateOneLogicFunction": [
                4,
                {
                    "input": [
                        525,
                        "UpdateLogicFunctionFromSourceInput!"
                    ]
                }
            ],
            "updateOneObject": [
                358,
                {
                    "input": [
                        538,
                        "UpdateOneObjectInput!"
                    ]
                }
            ],
            "updateOneRole": [
                431,
                {
                    "updateRoleInput": [
                        545,
                        "UpdateRoleInput!"
                    ]
                }
            ],
            "updatePageLayout": [
                379,
                {
                    "id": [
                        1,
                        "String!"
                    ],
                    "input": [
                        539,
                        "UpdatePageLayoutInput!"
                    ]
                }
            ],
            "updatePageLayoutTab": [
                380,
                {
                    "id": [
                        1,
                        "String!"
                    ],
                    "input": [
                        540,
                        "UpdatePageLayoutTabInput!"
                    ]
                }
            ],
            "updatePageLayoutWidget": [
                383,
                {
                    "id": [
                        1,
                        "String!"
                    ],
                    "input": [
                        542,
                        "UpdatePageLayoutWidgetInput!"
                    ]
                }
            ],
            "updatePageLayoutWithTabsAndWidgets": [
                379,
                {
                    "id": [
                        1,
                        "String!"
                    ],
                    "input": [
                        544,
                        "UpdatePageLayoutWithTabsInput!"
                    ]
                }
            ],
            "updatePasswordViaResetToken": [
                293,
                {
                    "newPassword": [
                        1,
                        "String!"
                    ],
                    "passwordResetToken": [
                        1,
                        "String!"
                    ]
                }
            ],
            "updateSkill": [
                471,
                {
                    "input": [
                        547,
                        "UpdateSkillInput!"
                    ]
                }
            ],
            "updateTimelineActivityType": [
                482,
                {
                    "input": [
                        548,
                        "UpdateTimelineActivityTypeInput!"
                    ]
                }
            ],
            "updateUnsubscribeTopic": [
                507,
                {
                    "input": [
                        549,
                        "UpdateUnsubscribeTopicInput!"
                    ]
                }
            ],
            "updateUsageLimit": [
                588,
                {
                    "input": [
                        550,
                        "UpdateUsageLimitInput!"
                    ]
                }
            ],
            "updateUserCreditsFallback": [
                84,
                {
                    "userCreditsFallback": [
                        603,
                        "UserCreditsFallback!"
                    ]
                }
            ],
            "updateUserEmail": [
                4,
                {
                    "newEmail": [
                        1,
                        "String!"
                    ],
                    "verifyEmailRedirectPath": [
                        1
                    ]
                }
            ],
            "updateValidationRule": [
                608,
                {
                    "input": [
                        551,
                        "UpdateValidationRuleInput!"
                    ]
                }
            ],
            "updateView": [
                613,
                {
                    "id": [
                        1,
                        "String!"
                    ],
                    "input": [
                        562,
                        "UpdateViewInput!"
                    ]
                }
            ],
            "updateViewField": [
                616,
                {
                    "input": [
                        555,
                        "UpdateViewFieldInput!"
                    ]
                }
            ],
            "updateViewFieldGroup": [
                617,
                {
                    "input": [
                        553,
                        "UpdateViewFieldGroupInput!"
                    ]
                }
            ],
            "updateViewFilter": [
                618,
                {
                    "input": [
                        558,
                        "UpdateViewFilterInput!"
                    ]
                }
            ],
            "updateViewFilterGroup": [
                619,
                {
                    "id": [
                        1,
                        "String!"
                    ],
                    "input": [
                        557,
                        "UpdateViewFilterGroupInput!"
                    ]
                }
            ],
            "updateViewGroup": [
                622,
                {
                    "input": [
                        560,
                        "UpdateViewGroupInput!"
                    ]
                }
            ],
            "updateViewSort": [
                625,
                {
                    "input": [
                        563,
                        "UpdateViewSortInput!"
                    ]
                }
            ],
            "updateWebhook": [
                629,
                {
                    "input": [
                        565,
                        "UpdateWebhookInput!"
                    ]
                }
            ],
            "updateWorkspace": [
                636,
                {
                    "data": [
                        568,
                        "UpdateWorkspaceInput!"
                    ]
                }
            ],
            "updateWorkspaceAllowedIframeOrigins": [
                636,
                {
                    "data": [
                        567,
                        "UpdateWorkspaceAllowedIframeOriginsInput!"
                    ]
                }
            ],
            "updateWorkspaceMemberRole": [
                645,
                {
                    "roleId": [
                        504,
                        "UUID!"
                    ],
                    "workspaceMemberId": [
                        504,
                        "UUID!"
                    ]
                }
            ],
            "updateWorkspaceMemberSettings": [
                4,
                {
                    "input": [
                        569,
                        "UpdateWorkspaceMemberSettingsInput!"
                    ]
                }
            ],
            "upgradeApplication": [
                4,
                {
                    "appRegistrationId": [
                        1,
                        "String!"
                    ],
                    "targetVersion": [
                        1,
                        "String!"
                    ]
                }
            ],
            "uploadAppTarball": [
                56,
                {
                    "file": [
                        570,
                        "Upload!"
                    ],
                    "universalIdentifier": [
                        1
                    ]
                }
            ],
            "uploadApplicationFile": [
                259,
                {
                    "applicationUniversalIdentifier": [
                        1,
                        "String!"
                    ],
                    "file": [
                        570,
                        "Upload!"
                    ],
                    "fileFolder": [
                        261,
                        "FileFolder!"
                    ],
                    "filePath": [
                        1,
                        "String!"
                    ]
                }
            ],
            "uploadFilesFieldFileByUniversalIdentifier": [
                263,
                {
                    "fieldMetadataUniversalIdentifier": [
                        1,
                        "String!"
                    ],
                    "file": [
                        570,
                        "Upload!"
                    ]
                }
            ],
            "uploadNewWorkspaceLogo": [
                263,
                {
                    "file": [
                        570,
                        "Upload!"
                    ],
                    "workspaceId": [
                        1,
                        "String!"
                    ]
                }
            ],
            "uploadWorkspaceLogo": [
                263,
                {
                    "file": [
                        570,
                        "Upload!"
                    ]
                }
            ],
            "uploadWorkspaceMemberProfilePicture": [
                263,
                {
                    "file": [
                        570,
                        "Upload!"
                    ]
                }
            ],
            "upsertFieldPermissions": [
                255,
                {
                    "upsertFieldPermissionsInput": [
                        571,
                        "UpsertFieldPermissionsInput!"
                    ]
                }
            ],
            "upsertFieldsWidget": [
                613,
                {
                    "input": [
                        574,
                        "UpsertFieldsWidgetInput!"
                    ]
                }
            ],
            "upsertObjectPermissions": [
                366,
                {
                    "upsertObjectPermissionsInput": [
                        575,
                        "UpsertObjectPermissionsInput!"
                    ]
                }
            ],
            "upsertPermissionFlags": [
                432,
                {
                    "upsertPermissionFlagsInput": [
                        576,
                        "UpsertPermissionFlagsInput!"
                    ]
                }
            ],
            "upsertRowLevelPermissionPredicates": [
                578,
                {
                    "input": [
                        577,
                        "UpsertRowLevelPermissionPredicatesInput!"
                    ]
                }
            ],
            "upsertViewWidget": [
                613,
                {
                    "input": [
                        579,
                        "UpsertViewWidgetInput!"
                    ]
                }
            ],
            "validateApprovedAccessDomain": [
                64,
                {
                    "input": [
                        606,
                        "ValidateApprovedAccessDomainInput!"
                    ]
                }
            ],
            "verifyEmailAndGetLoginToken": [
                610,
                {
                    "captchaToken": [
                        1
                    ],
                    "email": [
                        1,
                        "String!"
                    ],
                    "emailVerificationToken": [
                        1,
                        "String!"
                    ],
                    "origin": [
                        1,
                        "String!"
                    ]
                }
            ],
            "verifyEmailAndGetWorkspaceAgnosticToken": [
                74,
                {
                    "captchaToken": [
                        1
                    ],
                    "email": [
                        1,
                        "String!"
                    ],
                    "emailVerificationToken": [
                        1,
                        "String!"
                    ]
                }
            ],
            "verifyEmailingDomain": [
                223,
                {
                    "id": [
                        1,
                        "String!"
                    ]
                }
            ],
            "verifyTwoFactorAuthenticationMethodForAuthenticatedUser": [
                611,
                {
                    "otp": [
                        1,
                        "String!"
                    ]
                }
            ],
            "__typename": [
                1
            ]
        },
        "NativeModelCapabilities": {
            "twitterSearch": [
                4
            ],
            "webSearch": [
                4
            ],
            "__typename": [
                1
            ]
        },
        "NavigationMenuItem": {
            "applicationId": [
                504
            ],
            "color": [
                1
            ],
            "createdAt": [
                193
            ],
            "folderId": [
                504
            ],
            "icon": [
                1
            ],
            "id": [
                504
            ],
            "link": [
                1
            ],
            "name": [
                1
            ],
            "pageLayoutId": [
                504
            ],
            "position": [
                11
            ],
            "targetObjectMetadataId": [
                504
            ],
            "targetRecordId": [
                504
            ],
            "targetRecordIdentifier": [
                411
            ],
            "type": [
                356
            ],
            "updatedAt": [
                193
            ],
            "userWorkspaceId": [
                504
            ],
            "viewId": [
                504
            ],
            "__typename": [
                1
            ]
        },
        "NavigationMenuItemType": {},
        "NotesConfiguration": {
            "configurationType": [
                631
            ],
            "__typename": [
                1
            ]
        },
        "Object": {
            "applicationId": [
                504
            ],
            "color": [
                1
            ],
            "createdAt": [
                193
            ],
            "description": [
                1
            ],
            "duplicateCriteria": [
                1
            ],
            "fields": [
                361,
                {
                    "filter": [
                        253,
                        "FieldFilter!"
                    ],
                    "paging": [
                        191,
                        "CursorPaging!"
                    ]
                }
            ],
            "fieldsList": [
                248
            ],
            "icon": [
                1
            ],
            "id": [
                504
            ],
            "imageIdentifierFieldMetadataId": [
                504
            ],
            "indexMetadataList": [
                284
            ],
            "indexMetadatas": [
                363,
                {
                    "filter": [
                        287,
                        "IndexFilter!"
                    ],
                    "paging": [
                        191,
                        "CursorPaging!"
                    ]
                }
            ],
            "isActive": [
                4
            ],
            "isLabelSyncedWithName": [
                4
            ],
            "isRemote": [
                4
            ],
            "isSearchable": [
                4
            ],
            "isSystem": [
                4
            ],
            "isUICreatable": [
                4
            ],
            "isUIEditable": [
                4
            ],
            "isUIReadOnly": [
                4
            ],
            "labelIdentifierFieldMetadataId": [
                504
            ],
            "labelPlural": [
                1
            ],
            "labelSingular": [
                1
            ],
            "namePlural": [
                1
            ],
            "nameSingular": [
                1
            ],
            "openRecordIn": [
                365
            ],
            "readability": [
                343
            ],
            "readabilityParentFieldUniversalIdentifiers": [
                504
            ],
            "searchFieldMetadataList": [
                450
            ],
            "sharingReach": [
                373
            ],
            "shortcut": [
                1
            ],
            "universalIdentifier": [
                1
            ],
            "updatedAt": [
                193
            ],
            "writability": [
                348
            ],
            "__typename": [
                1
            ]
        },
        "ObjectConnection": {
            "edges": [
                360
            ],
            "pageInfo": [
                378
            ],
            "__typename": [
                1
            ]
        },
        "ObjectEdge": {
            "cursor": [
                145
            ],
            "node": [
                358
            ],
            "__typename": [
                1
            ]
        },
        "ObjectFieldsConnection": {
            "edges": [
                252
            ],
            "pageInfo": [
                378
            ],
            "__typename": [
                1
            ]
        },
        "ObjectFilter": {
            "and": [
                362
            ],
            "id": [
                505
            ],
            "isActive": [
                110
            ],
            "isRemote": [
                110
            ],
            "isSearchable": [
                110
            ],
            "isSystem": [
                110
            ],
            "isUICreatable": [
                110
            ],
            "isUIEditable": [
                110
            ],
            "isUIReadOnly": [
                110
            ],
            "or": [
                362
            ],
            "universalIdentifier": [
                505
            ],
            "__typename": [
                1
            ]
        },
        "ObjectIndexMetadatasConnection": {
            "edges": [
                285
            ],
            "pageInfo": [
                378
            ],
            "__typename": [
                1
            ]
        },
        "ObjectMetadataCommandMenuItemPayload": {
            "objectMetadataItemId": [
                504
            ],
            "__typename": [
                1
            ]
        },
        "ObjectOpenRecordIn": {},
        "ObjectPermission": {
            "canDestroyObjectRecords": [
                4
            ],
            "canReadObjectRecords": [
                4
            ],
            "canSoftDeleteObjectRecords": [
                4
            ],
            "canUpdateObjectRecords": [
                4
            ],
            "objectMetadataId": [
                504
            ],
            "restrictedFields": [
                295
            ],
            "rowLevelPermissionPredicateGroups": [
                435
            ],
            "rowLevelPermissionPredicates": [
                434
            ],
            "__typename": [
                1
            ]
        },
        "ObjectPermissionInput": {
            "canDestroyObjectRecords": [
                4
            ],
            "canReadObjectRecords": [
                4
            ],
            "canSoftDeleteObjectRecords": [
                4
            ],
            "canUpdateObjectRecords": [
                4
            ],
            "objectMetadataId": [
                504
            ],
            "__typename": [
                1
            ]
        },
        "ObjectRecordCount": {
            "objectNamePlural": [
                1
            ],
            "totalCount": [
                8
            ],
            "__typename": [
                1
            ]
        },
        "ObjectRecordEvent": {
            "action": [
                192
            ],
            "objectNameSingular": [
                1
            ],
            "properties": [
                370
            ],
            "recordId": [
                1
            ],
            "userId": [
                1
            ],
            "workspaceMemberId": [
                1
            ],
            "__typename": [
                1
            ]
        },
        "ObjectRecordEventProperties": {
            "after": [
                295
            ],
            "before": [
                295
            ],
            "diff": [
                295
            ],
            "updatedFields": [
                1
            ],
            "__typename": [
                1
            ]
        },
        "ObjectRecordEventWithQueryIds": {
            "objectRecordEvent": [
                369
            ],
            "queryIds": [
                1
            ],
            "__typename": [
                1
            ]
        },
        "ObjectRecordGroupByDateGranularity": {},
        "ObjectSharingReach": {},
        "OnboardingStatus": {},
        "OnboardingStepNavigation": {
            "onboardingStatus": [
                374
            ],
            "previousOnboardingStatus": [
                374
            ],
            "__typename": [
                1
            ]
        },
        "OnboardingStepSuccess": {
            "success": [
                4
            ],
            "__typename": [
                1
            ]
        },
        "OpenRecordIn": {},
        "PageInfo": {
            "endCursor": [
                145
            ],
            "hasNextPage": [
                4
            ],
            "hasPreviousPage": [
                4
            ],
            "startCursor": [
                145
            ],
            "__typename": [
                1
            ]
        },
        "PageLayout": {
            "applicationId": [
                504
            ],
            "createdAt": [
                193
            ],
            "defaultTabToFocusOnMobileAndSidePanelId": [
                504
            ],
            "deletedAt": [
                193
            ],
            "id": [
                504
            ],
            "isFirstTabPinned": [
                4
            ],
            "isSystemSideEffect": [
                4
            ],
            "name": [
                1
            ],
            "objectMetadataId": [
                504
            ],
            "tabs": [
                380
            ],
            "type": [
                382
            ],
            "universalIdentifier": [
                504
            ],
            "updatedAt": [
                193
            ],
            "__typename": [
                1
            ]
        },
        "PageLayoutTab": {
            "applicationId": [
                504
            ],
            "createdAt": [
                193
            ],
            "deletedAt": [
                193
            ],
            "icon": [
                1
            ],
            "id": [
                504
            ],
            "isActive": [
                4
            ],
            "isOverridden": [
                4
            ],
            "isSystemSideEffect": [
                4
            ],
            "layoutMode": [
                381
            ],
            "pageLayoutId": [
                504
            ],
            "position": [
                11
            ],
            "title": [
                1
            ],
            "universalIdentifier": [
                504
            ],
            "updatedAt": [
                193
            ],
            "widgets": [
                383
            ],
            "__typename": [
                1
            ]
        },
        "PageLayoutTabLayoutMode": {},
        "PageLayoutType": {},
        "PageLayoutWidget": {
            "applicationId": [
                504
            ],
            "conditionalAvailabilityExpression": [
                1
            ],
            "conditionalDisplay": [
                295
            ],
            "configuration": [
                630
            ],
            "createdAt": [
                193
            ],
            "deletedAt": [
                193
            ],
            "gridPosition": [
                277
            ],
            "id": [
                504
            ],
            "isActive": [
                4
            ],
            "isOverridden": [
                4
            ],
            "isSystemSideEffect": [
                4
            ],
            "objectMetadataId": [
                504
            ],
            "pageLayoutTabId": [
                504
            ],
            "position": [
                386
            ],
            "title": [
                1
            ],
            "type": [
                632
            ],
            "universalIdentifier": [
                504
            ],
            "updatedAt": [
                193
            ],
            "__typename": [
                1
            ]
        },
        "PageLayoutWidgetCanvasPosition": {
            "layoutMode": [
                381
            ],
            "__typename": [
                1
            ]
        },
        "PageLayoutWidgetGridPosition": {
            "column": [
                8
            ],
            "columnSpan": [
                8
            ],
            "layoutMode": [
                381
            ],
            "row": [
                8
            ],
            "rowSpan": [
                8
            ],
            "__typename": [
                1
            ]
        },
        "PageLayoutWidgetPosition": {
            "on_PageLayoutWidgetCanvasPosition": [
                384
            ],
            "on_PageLayoutWidgetGridPosition": [
                385
            ],
            "on_PageLayoutWidgetVerticalListPosition": [
                388
            ],
            "__typename": [
                1
            ]
        },
        "PageLayoutWidgetVerticalListHeightBehavior": {},
        "PageLayoutWidgetVerticalListPosition": {
            "heightBehavior": [
                387
            ],
            "index": [
                8
            ],
            "layoutMode": [
                381
            ],
            "__typename": [
                1
            ]
        },
        "PathCommandMenuItemPayload": {
            "path": [
                1
            ],
            "__typename": [
                1
            ]
        },
        "PermissionFlag": {
            "applicationId": [
                504
            ],
            "createdAt": [
                193
            ],
            "description": [
                1
            ],
            "icon": [
                1
            ],
            "id": [
                504
            ],
            "key": [
                1
            ],
            "label": [
                1
            ],
            "permissionType": [
                1
            ],
            "universalIdentifier": [
                504
            ],
            "updatedAt": [
                193
            ],
            "__typename": [
                1
            ]
        },
        "PermissionFlagType": {},
        "PieChartConfiguration": {
            "aggregateFieldMetadataId": [
                504
            ],
            "aggregateOperation": [
                20
            ],
            "color": [
                1
            ],
            "configurationType": [
                631
            ],
            "dateGranularity": [
                372
            ],
            "description": [
                1
            ],
            "displayDataLabel": [
                4
            ],
            "displayLegend": [
                4
            ],
            "filter": [
                295
            ],
            "firstDayOfTheWeek": [
                8
            ],
            "groupByFieldMetadataId": [
                504
            ],
            "groupBySubFieldName": [
                1
            ],
            "hideEmptyCategory": [
                4
            ],
            "manualSortOrder": [
                1
            ],
            "numberFormat": [
                125
            ],
            "orderBy": [
                276
            ],
            "showCenterMetric": [
                4
            ],
            "splitMultiValueFields": [
                4
            ],
            "timezone": [
                1
            ],
            "__typename": [
                1
            ]
        },
        "PieChartData": {
            "data": [
                395
            ],
            "formattedToRawLookup": [
                295
            ],
            "hasTooManyGroups": [
                4
            ],
            "showCenterMetric": [
                4
            ],
            "showDataLabels": [
                4
            ],
            "showLegend": [
                4
            ],
            "__typename": [
                1
            ]
        },
        "PieChartDataInput": {
            "configuration": [
                295
            ],
            "objectMetadataId": [
                504
            ],
            "__typename": [
                1
            ]
        },
        "PieChartDataItem": {
            "key": [
                1
            ],
            "value": [
                11
            ],
            "__typename": [
                1
            ]
        },
        "PlaceDetailsResult": {
            "city": [
                1
            ],
            "country": [
                1
            ],
            "location": [
                306
            ],
            "postcode": [
                1
            ],
            "state": [
                1
            ],
            "street": [
                1
            ],
            "__typename": [
                1
            ]
        },
        "PreviewMessageCampaignAudienceInput": {
            "listId": [
                1
            ],
            "unsubscribeTopicId": [
                1
            ],
            "__typename": [
                1
            ]
        },
        "PreviewMessageCampaignSendInput": {
            "campaignId": [
                1
            ],
            "scheduledAt": [
                193
            ],
            "__typename": [
                1
            ]
        },
        "PreviewMessageCampaignSendOutputDTO": {
            "audience": [
                119
            ],
            "blockers": [
                325
            ],
            "__typename": [
                1
            ]
        },
        "PublicApplicationRegistration": {
            "id": [
                504
            ],
            "logoUrl": [
                1
            ],
            "name": [
                1
            ],
            "oAuthScopes": [
                1
            ],
            "websiteUrl": [
                1
            ],
            "__typename": [
                1
            ]
        },
        "PublicConnectionParametersOutput": {
            "connectionSecurity": [
                220
            ],
            "host": [
                1
            ],
            "port": [
                11
            ],
            "username": [
                1
            ],
            "__typename": [
                1
            ]
        },
        "PublicDomain": {
            "applicationId": [
                504
            ],
            "createdAt": [
                193
            ],
            "domain": [
                1
            ],
            "id": [
                504
            ],
            "isValidated": [
                4
            ],
            "__typename": [
                1
            ]
        },
        "PublicFeatureFlag": {
            "key": [
                247
            ],
            "metadata": [
                404
            ],
            "__typename": [
                1
            ]
        },
        "PublicFeatureFlagMetadata": {
            "description": [
                1
            ],
            "icon": [
                1
            ],
            "imagePath": [
                1
            ],
            "label": [
                1
            ],
            "__typename": [
                1
            ]
        },
        "PublicImapSmtpCaldavConnectionParameters": {
            "CALDAV": [
                401
            ],
            "IMAP": [
                401
            ],
            "SMTP": [
                401
            ],
            "__typename": [
                1
            ]
        },
        "PublicWorkspaceData": {
            "authBypassProviders": [
                65
            ],
            "authProviders": [
                66
            ],
            "displayName": [
                1
            ],
            "id": [
                504
            ],
            "logo": [
                1
            ],
            "workspaceUrls": [
                654
            ],
            "__typename": [
                1
            ]
        },
        "PublicWorkspaceDataSummary": {
            "displayName": [
                1
            ],
            "id": [
                504
            ],
            "logo": [
                1
            ],
            "__typename": [
                1
            ]
        },
        "Query": {
            "agentChatOpenThreadsSummary": [
                7
            ],
            "agentRuns": [
                17,
                {
                    "agentId": [
                        504,
                        "UUID!"
                    ],
                    "limit": [
                        8,
                        "Int!"
                    ]
                }
            ],
            "aiChatUsage": [
                21
            ],
            "apiKey": [
                29,
                {
                    "input": [
                        272,
                        "GetApiKeyInput!"
                    ]
                }
            ],
            "apiKeys": [
                29
            ],
            "appConnection": [
                32,
                {
                    "id": [
                        10,
                        "ID!"
                    ]
                }
            ],
            "appConnections": [
                32,
                {
                    "filter": [
                        304
                    ]
                }
            ],
            "appKeyValue": [
                33,
                {
                    "key": [
                        1,
                        "String!"
                    ],
                    "scope": [
                        34
                    ]
                }
            ],
            "appMessageChannels": [
                326,
                {
                    "filter": [
                        305
                    ]
                }
            ],
            "applicationConnectedAccounts": [
                40,
                {
                    "applicationId": [
                        504,
                        "UUID!"
                    ]
                }
            ],
            "applicationConnectionProviders": [
                41,
                {
                    "applicationId": [
                        504,
                        "UUID!"
                    ]
                }
            ],
            "applicationCoreGraphqlSchema": [
                1,
                {
                    "applicationUniversalIdentifier": [
                        1,
                        "String!"
                    ]
                }
            ],
            "applicationRegistrationTarballUrl": [
                1,
                {
                    "id": [
                        1,
                        "String!"
                    ]
                }
            ],
            "applicationSdkClientChecksums": [
                449,
                {
                    "applicationId": [
                        504,
                        "UUID!"
                    ]
                }
            ],
            "barChartData": [
                77,
                {
                    "input": [
                        78,
                        "BarChartDataInput!"
                    ]
                }
            ],
            "billingPortalSession": [
                101,
                {
                    "forPaymentMethodUpdate": [
                        4
                    ],
                    "returnUrlPath": [
                        1
                    ]
                }
            ],
            "callRecordingIdForCalendarEvent": [
                504,
                {
                    "calendarEventId": [
                        504,
                        "UUID!"
                    ]
                }
            ],
            "chatMessages": [
                14,
                {
                    "threadId": [
                        504,
                        "UUID!"
                    ]
                }
            ],
            "chatStreamCatchupChunks": [
                127,
                {
                    "threadId": [
                        504,
                        "UUID!"
                    ]
                }
            ],
            "chatThread": [
                9,
                {
                    "id": [
                        504,
                        "UUID!"
                    ]
                }
            ],
            "checkUserExists": [
                130,
                {
                    "captchaToken": [
                        1
                    ],
                    "email": [
                        1,
                        "String!"
                    ]
                }
            ],
            "checkWorkspaceInviteHashIsValid": [
                644,
                {
                    "inviteHash": [
                        1,
                        "String!"
                    ]
                }
            ],
            "checkWorkspaceSubdomainAvailability": [
                475,
                {
                    "subdomain": [
                        1,
                        "String!"
                    ]
                }
            ],
            "commandMenuItem": [
                138,
                {
                    "id": [
                        504,
                        "UUID!"
                    ]
                }
            ],
            "commandMenuItems": [
                138
            ],
            "currentUser": [
                601
            ],
            "currentUserApplicationAuthorizations": [
                38
            ],
            "currentUserSessions": [
                604
            ],
            "currentWorkspace": [
                636
            ],
            "enterpriseCheckoutSession": [
                1,
                {
                    "billingInterval": [
                        1
                    ]
                }
            ],
            "enterprisePortalSession": [
                1,
                {
                    "returnUrlPath": [
                        1
                    ]
                }
            ],
            "enterpriseSubscriptionStatus": [
                234
            ],
            "eventLogs": [
                241,
                {
                    "input": [
                        240,
                        "EventLogQueryInput!"
                    ]
                }
            ],
            "exportApplication": [
                43,
                {
                    "universalIdentifier": [
                        504,
                        "UUID!"
                    ]
                }
            ],
            "field": [
                248,
                {
                    "id": [
                        504,
                        "UUID!"
                    ]
                }
            ],
            "fields": [
                250,
                {
                    "filter": [
                        253,
                        "FieldFilter!"
                    ],
                    "paging": [
                        191,
                        "CursorPaging!"
                    ]
                }
            ],
            "findApplicationRegistrationByClientId": [
                400,
                {
                    "clientId": [
                        1,
                        "String!"
                    ]
                }
            ],
            "findApplicationRegistrationByUniversalIdentifier": [
                56,
                {
                    "universalIdentifier": [
                        1,
                        "String!"
                    ]
                }
            ],
            "findApplicationRegistrationStats": [
                58,
                {
                    "id": [
                        1,
                        "String!"
                    ],
                    "periodEnd": [
                        193
                    ],
                    "periodStart": [
                        193
                    ]
                }
            ],
            "findApplicationRegistrationVariables": [
                60,
                {
                    "applicationRegistrationId": [
                        1,
                        "String!"
                    ]
                }
            ],
            "findClaimableApplicationRegistration": [
                131,
                {
                    "sourcePackage": [
                        1
                    ],
                    "universalIdentifier": [
                        1
                    ]
                }
            ],
            "findInstallApplicationJobStatus": [
                298,
                {
                    "jobId": [
                        1
                    ],
                    "universalIdentifier": [
                        1,
                        "String!"
                    ]
                }
            ],
            "findManyAgents": [
                3
            ],
            "findManyApplicationRegistrations": [
                56
            ],
            "findManyApplications": [
                37
            ],
            "findManyLogicFunctions": [
                307
            ],
            "findManyMarketplaceApps": [
                315,
                {
                    "universalIdentifiers": [
                        1,
                        "[String!]"
                    ]
                }
            ],
            "findManyPublicDomains": [
                402
            ],
            "findMarketplaceAppDetail": [
                316,
                {
                    "universalIdentifier": [
                        1,
                        "String!"
                    ]
                }
            ],
            "findOneAgent": [
                3,
                {
                    "input": [
                        13,
                        "AgentIdInput!"
                    ]
                }
            ],
            "findOneApplication": [
                37,
                {
                    "id": [
                        504
                    ],
                    "universalIdentifier": [
                        504
                    ]
                }
            ],
            "findOneApplicationRegistration": [
                56,
                {
                    "id": [
                        1,
                        "String!"
                    ]
                }
            ],
            "findOneLogicFunction": [
                307,
                {
                    "input": [
                        311,
                        "LogicFunctionIdInput!"
                    ]
                }
            ],
            "findUninstallApplicationJobStatus": [
                298,
                {
                    "jobId": [
                        1
                    ],
                    "universalIdentifier": [
                        1,
                        "String!"
                    ]
                }
            ],
            "findUpgradeApplicationJobStatus": [
                298,
                {
                    "jobId": [
                        1
                    ],
                    "universalIdentifier": [
                        1,
                        "String!"
                    ]
                }
            ],
            "findWorkspaceAiStats": [
                638
            ],
            "findWorkspaceFromInviteHash": [
                636,
                {
                    "inviteHash": [
                        1,
                        "String!"
                    ]
                }
            ],
            "findWorkspaceInvitations": [
                643
            ],
            "frontComponent": [
                268,
                {
                    "id": [
                        504,
                        "UUID!"
                    ]
                }
            ],
            "frontComponents": [
                268
            ],
            "getAddressDetails": [
                396,
                {
                    "placeId": [
                        1,
                        "String!"
                    ],
                    "token": [
                        1,
                        "String!"
                    ]
                }
            ],
            "getAiSystemPromptPreview": [
                23
            ],
            "getApiKeyRoles": [
                431
            ],
            "getApprovedAccessDomains": [
                64
            ],
            "getAutoCompleteAddress": [
                71,
                {
                    "address": [
                        1,
                        "String!"
                    ],
                    "country": [
                        1
                    ],
                    "isFieldCity": [
                        4
                    ],
                    "token": [
                        1,
                        "String!"
                    ]
                }
            ],
            "getAvailablePackages": [
                295,
                {
                    "input": [
                        311,
                        "LogicFunctionIdInput!"
                    ]
                }
            ],
            "getConnectedImapSmtpCaldavAccount": [
                144,
                {
                    "id": [
                        504,
                        "UUID!"
                    ]
                }
            ],
            "getEmailingDomains": [
                223
            ],
            "getInviteSuggestions": [
                294
            ],
            "getJobs": [
                298,
                {
                    "jobIds": [
                        1,
                        "[String!]!"
                    ]
                }
            ],
            "getLogicFunctionSourceCode": [
                1,
                {
                    "input": [
                        311,
                        "LogicFunctionIdInput!"
                    ]
                }
            ],
            "getPageLayout": [
                379,
                {
                    "id": [
                        1,
                        "String!"
                    ]
                }
            ],
            "getPageLayoutTab": [
                380,
                {
                    "id": [
                        1,
                        "String!"
                    ]
                }
            ],
            "getPageLayoutTabs": [
                380,
                {
                    "pageLayoutId": [
                        1,
                        "String!"
                    ]
                }
            ],
            "getPageLayoutWidget": [
                383,
                {
                    "id": [
                        1,
                        "String!"
                    ]
                }
            ],
            "getPageLayoutWidgets": [
                383,
                {
                    "pageLayoutTabId": [
                        1,
                        "String!"
                    ]
                }
            ],
            "getPageLayouts": [
                379,
                {
                    "objectMetadataId": [
                        1
                    ],
                    "pageLayoutType": [
                        382
                    ]
                }
            ],
            "getPermissionFlags": [
                390
            ],
            "getPublicWorkspaceDataByDomain": [
                406,
                {
                    "origin": [
                        1
                    ]
                }
            ],
            "getPublicWorkspaceDataById": [
                407,
                {
                    "id": [
                        504,
                        "UUID!"
                    ]
                }
            ],
            "getResourceCreditUsage": [
                100
            ],
            "getRole": [
                431,
                {
                    "id": [
                        504,
                        "UUID!"
                    ]
                }
            ],
            "getRoles": [
                431
            ],
            "getSSOIdentityProviders": [
                265
            ],
            "getToolIndex": [
                486
            ],
            "getToolInputSchema": [
                295,
                {
                    "toolName": [
                        1,
                        "String!"
                    ]
                }
            ],
            "getUsageAnalytics": [
                585,
                {
                    "input": [
                        586
                    ]
                }
            ],
            "getView": [
                613,
                {
                    "id": [
                        1,
                        "String!"
                    ]
                }
            ],
            "getViewField": [
                616,
                {
                    "id": [
                        1,
                        "String!"
                    ]
                }
            ],
            "getViewFieldGroup": [
                617,
                {
                    "id": [
                        1,
                        "String!"
                    ]
                }
            ],
            "getViewFieldGroups": [
                617,
                {
                    "viewId": [
                        1,
                        "String!"
                    ]
                }
            ],
            "getViewFields": [
                616,
                {
                    "viewId": [
                        1,
                        "String!"
                    ]
                }
            ],
            "getViewFilter": [
                618,
                {
                    "id": [
                        1,
                        "String!"
                    ]
                }
            ],
            "getViewFilterGroup": [
                619,
                {
                    "id": [
                        1,
                        "String!"
                    ]
                }
            ],
            "getViewFilterGroups": [
                619,
                {
                    "viewId": [
                        1
                    ]
                }
            ],
            "getViewFilters": [
                618,
                {
                    "viewId": [
                        1
                    ]
                }
            ],
            "getViewGroup": [
                622,
                {
                    "id": [
                        1,
                        "String!"
                    ]
                }
            ],
            "getViewGroups": [
                622,
                {
                    "viewId": [
                        1
                    ]
                }
            ],
            "getViewSort": [
                625,
                {
                    "id": [
                        1,
                        "String!"
                    ]
                }
            ],
            "getViewSorts": [
                625,
                {
                    "viewId": [
                        1
                    ]
                }
            ],
            "getViews": [
                613,
                {
                    "objectMetadataId": [
                        1
                    ],
                    "viewTypes": [
                        627,
                        "[ViewType!]"
                    ]
                }
            ],
            "getWorkspaceCreationDefaults": [
                641
            ],
            "githubClaimAuthorizationUrl": [
                1,
                {
                    "applicationRegistrationId": [
                        1,
                        "String!"
                    ]
                }
            ],
            "isApplicationStopped": [
                4,
                {
                    "applicationUniversalIdentifier": [
                        1,
                        "String!"
                    ]
                }
            ],
            "lineChartData": [
                300,
                {
                    "input": [
                        301,
                        "LineChartDataInput!"
                    ]
                }
            ],
            "listPlans": [
                91
            ],
            "mcpServer": [
                321,
                {
                    "id": [
                        504,
                        "UUID!"
                    ]
                }
            ],
            "mcpServers": [
                321
            ],
            "messageSuppressions": [
                338,
                {
                    "input": [
                        266,
                        "FindMessageSuppressionsInput!"
                    ]
                }
            ],
            "metadataTranslations": [
                344,
                {
                    "input": [
                        347,
                        "MetadataTranslationsInput!"
                    ]
                }
            ],
            "minimalMetadata": [
                349
            ],
            "mostlyEmptyFieldMetadataIds": [
                504,
                {
                    "objectMetadataId": [
                        504,
                        "UUID!"
                    ]
                }
            ],
            "myApplicationPreferences": [
                55
            ],
            "myCalendarChannels": [
                111,
                {
                    "connectedAccountId": [
                        504
                    ]
                }
            ],
            "myConnectedAccounts": [
                142
            ],
            "myMessageChannels": [
                326,
                {
                    "connectedAccountId": [
                        504
                    ]
                }
            ],
            "myMessageFolders": [
                333,
                {
                    "messageChannelId": [
                        504
                    ]
                }
            ],
            "myUserApplicationVariables": [
                646
            ],
            "navigationMenuItem": [
                355,
                {
                    "id": [
                        504,
                        "UUID!"
                    ]
                }
            ],
            "navigationMenuItems": [
                355
            ],
            "object": [
                358,
                {
                    "id": [
                        504,
                        "UUID!"
                    ]
                }
            ],
            "objectRecordCounts": [
                368
            ],
            "objects": [
                359,
                {
                    "filter": [
                        362,
                        "ObjectFilter!"
                    ],
                    "paging": [
                        191,
                        "CursorPaging!"
                    ]
                }
            ],
            "pieChartData": [
                393,
                {
                    "input": [
                        394,
                        "PieChartDataInput!"
                    ]
                }
            ],
            "previewMessageCampaignAudience": [
                119,
                {
                    "input": [
                        397,
                        "PreviewMessageCampaignAudienceInput!"
                    ]
                }
            ],
            "previewMessageCampaignSend": [
                399,
                {
                    "input": [
                        398,
                        "PreviewMessageCampaignSendInput!"
                    ]
                }
            ],
            "publicMarketplaceAppDetail": [
                316,
                {
                    "universalIdentifier": [
                        1,
                        "String!"
                    ]
                }
            ],
            "publicMarketplaceApps": [
                315,
                {
                    "isVetted": [
                        4,
                        "Boolean!"
                    ]
                }
            ],
            "recordPermissions": [
                413,
                {
                    "targets": [
                        423,
                        "[RecordTargetInput!]!"
                    ]
                }
            ],
            "recordSharing": [
                418,
                {
                    "target": [
                        423,
                        "RecordTargetInput!"
                    ]
                }
            ],
            "skill": [
                471,
                {
                    "id": [
                        504,
                        "UUID!"
                    ]
                }
            ],
            "skills": [
                471
            ],
            "timelineActivityTypes": [
                482
            ],
            "twoFactorAuthenticationRecoveryStatus": [
                503,
                {
                    "userId": [
                        504,
                        "UUID!"
                    ]
                }
            ],
            "unsubscribeTopics": [
                507
            ],
            "usageLimits": [
                588
            ],
            "usageQuotaDefinitions": [
                592
            ],
            "usageQuotaScopeConsumption": [
                594,
                {
                    "input": [
                        595,
                        "UsageQuotaScopeInput!"
                    ]
                }
            ],
            "usageQuotasWithConsumption": [
                596
            ],
            "validatePasswordResetToken": [
                607,
                {
                    "passwordResetToken": [
                        1,
                        "String!"
                    ]
                }
            ],
            "validationRules": [
                608,
                {
                    "objectMetadataId": [
                        504,
                        "UUID!"
                    ]
                }
            ],
            "webhook": [
                629,
                {
                    "id": [
                        504,
                        "UUID!"
                    ]
                }
            ],
            "webhooks": [
                629
            ],
            "__typename": [
                1
            ]
        },
        "RatioAggregateConfig": {
            "fieldMetadataId": [
                504
            ],
            "optionValue": [
                1
            ],
            "__typename": [
                1
            ]
        },
        "RecordExport": {
            "downloadPath": [
                1
            ],
            "errorMessage": [
                1
            ],
            "filename": [
                1
            ],
            "id": [
                504
            ],
            "progress": [
                8
            ],
            "__typename": [
                1
            ]
        },
        "RecordIdentifier": {
            "id": [
                504
            ],
            "imageIdentifier": [
                1
            ],
            "labelIdentifier": [
                1
            ],
            "__typename": [
                1
            ]
        },
        "RecordPermissionsDTO": {
            "canDelete": [
                4
            ],
            "canRead": [
                4
            ],
            "canSoftDelete": [
                4
            ],
            "canUpdate": [
                4
            ],
            "__typename": [
                1
            ]
        },
        "RecordPermissionsResult": {
            "objectMetadataId": [
                504
            ],
            "permissions": [
                412
            ],
            "recordId": [
                504
            ],
            "__typename": [
                1
            ]
        },
        "RecordShareAccessLevel": {},
        "RecordSharePrincipalInput": {
            "roleId": [
                504
            ],
            "workspaceMemberId": [
                504
            ],
            "__typename": [
                1
            ]
        },
        "RecordSharePrincipalType": {},
        "RecordShareRowCause": {},
        "RecordSharingDTO": {
            "canManageSharing": [
                4
            ],
            "defaultGeneralAccessLevel": [
                414
            ],
            "generalAccessLevel": [
                414
            ],
            "hasManagedGeneralAccess": [
                4
            ],
            "permissions": [
                412
            ],
            "roles": [
                421
            ],
            "shares": [
                419
            ],
            "sharingMode": [
                420
            ],
            "__typename": [
                1
            ]
        },
        "RecordSharingGrantDTO": {
            "accessLevel": [
                414
            ],
            "id": [
                10
            ],
            "principalId": [
                504
            ],
            "principalRoleId": [
                504
            ],
            "principalType": [
                416
            ],
            "rowCause": [
                417
            ],
            "__typename": [
                1
            ]
        },
        "RecordSharingMode": {},
        "RecordSharingRoleDTO": {
            "canRead": [
                4
            ],
            "canUpdate": [
                4
            ],
            "id": [
                504
            ],
            "label": [
                1
            ],
            "__typename": [
                1
            ]
        },
        "RecordTableConfiguration": {
            "configurationType": [
                631
            ],
            "isUIEditable": [
                4
            ],
            "recordLimit": [
                8
            ],
            "viewId": [
                1
            ],
            "__typename": [
                1
            ]
        },
        "RecordTargetInput": {
            "objectMetadataId": [
                504
            ],
            "recordId": [
                504
            ],
            "__typename": [
                1
            ]
        },
        "Relation": {
            "sourceFieldMetadata": [
                248
            ],
            "sourceObjectMetadata": [
                358
            ],
            "targetFieldMetadata": [
                248
            ],
            "targetObjectMetadata": [
                358
            ],
            "type": [
                425
            ],
            "__typename": [
                1
            ]
        },
        "RelationType": {},
        "RemoveQueryFromEventStreamInput": {
            "eventStreamId": [
                1
            ],
            "queryId": [
                1
            ],
            "__typename": [
                1
            ]
        },
        "ReportAppConnectionAuthFailureInput": {
            "id": [
                10
            ],
            "reason": [
                1
            ],
            "__typename": [
                1
            ]
        },
        "ResendEmailVerificationToken": {
            "success": [
                4
            ],
            "__typename": [
                1
            ]
        },
        "RevokeApiKeyInput": {
            "id": [
                504
            ],
            "__typename": [
                1
            ]
        },
        "RichTextBody": {
            "blocknote": [
                1
            ],
            "markdown": [
                1
            ],
            "__typename": [
                1
            ]
        },
        "Role": {
            "agents": [
                3
            ],
            "apiKeys": [
                30
            ],
            "applicationId": [
                504
            ],
            "canAccessAllTools": [
                4
            ],
            "canBeAssignedToAgents": [
                4
            ],
            "canBeAssignedToApiKeys": [
                4
            ],
            "canBeAssignedToUsers": [
                4
            ],
            "canDestroyAllObjectRecords": [
                4
            ],
            "canReadAllObjectRecords": [
                4
            ],
            "canSoftDeleteAllObjectRecords": [
                4
            ],
            "canUpdateAllObjectRecords": [
                4
            ],
            "canUpdateAllSettings": [
                4
            ],
            "description": [
                1
            ],
            "fieldPermissions": [
                255
            ],
            "icon": [
                1
            ],
            "id": [
                504
            ],
            "isEditable": [
                4
            ],
            "label": [
                1
            ],
            "objectPermissions": [
                366
            ],
            "permissionFlags": [
                432
            ],
            "rowLevelPermissionPredicateGroups": [
                435
            ],
            "rowLevelPermissionPredicates": [
                434
            ],
            "universalIdentifier": [
                504
            ],
            "workspaceMembers": [
                645
            ],
            "__typename": [
                1
            ]
        },
        "RolePermissionFlag": {
            "flag": [
                1
            ],
            "id": [
                504
            ],
            "roleId": [
                504
            ],
            "__typename": [
                1
            ]
        },
        "RotateClientSecret": {
            "clientSecret": [
                1
            ],
            "__typename": [
                1
            ]
        },
        "RowLevelPermissionPredicate": {
            "fieldMetadataId": [
                1
            ],
            "id": [
                1
            ],
            "objectMetadataId": [
                1
            ],
            "operand": [
                439
            ],
            "positionInRowLevelPermissionPredicateGroup": [
                11
            ],
            "roleId": [
                1
            ],
            "rowLevelPermissionPredicateGroupId": [
                1
            ],
            "subFieldName": [
                1
            ],
            "value": [
                295
            ],
            "workspaceMemberFieldMetadataId": [
                1
            ],
            "workspaceMemberSubFieldName": [
                1
            ],
            "__typename": [
                1
            ]
        },
        "RowLevelPermissionPredicateGroup": {
            "id": [
                1
            ],
            "logicalOperator": [
                437
            ],
            "objectMetadataId": [
                1
            ],
            "parentRowLevelPermissionPredicateGroupId": [
                1
            ],
            "positionInRowLevelPermissionPredicateGroup": [
                11
            ],
            "roleId": [
                1
            ],
            "__typename": [
                1
            ]
        },
        "RowLevelPermissionPredicateGroupInput": {
            "id": [
                504
            ],
            "logicalOperator": [
                437
            ],
            "objectMetadataId": [
                504
            ],
            "parentRowLevelPermissionPredicateGroupId": [
                504
            ],
            "positionInRowLevelPermissionPredicateGroup": [
                11
            ],
            "__typename": [
                1
            ]
        },
        "RowLevelPermissionPredicateGroupLogicalOperator": {},
        "RowLevelPermissionPredicateInput": {
            "fieldMetadataId": [
                504
            ],
            "id": [
                504
            ],
            "operand": [
                439
            ],
            "positionInRowLevelPermissionPredicateGroup": [
                11
            ],
            "rowLevelPermissionPredicateGroupId": [
                504
            ],
            "subFieldName": [
                1
            ],
            "value": [
                295
            ],
            "workspaceMemberFieldMetadataId": [
                1
            ],
            "workspaceMemberSubFieldName": [
                1
            ],
            "__typename": [
                1
            ]
        },
        "RowLevelPermissionPredicateOperand": {},
        "RunAgentInput": {
            "additionalInstructions": [
                1
            ],
            "agentUniversalIdentifier": [
                1
            ],
            "input": [
                442
            ],
            "messages": [
                442
            ],
            "prompt": [
                1
            ],
            "responseFormat": [
                295
            ],
            "runAsWorkspaceMemberId": [
                504
            ],
            "thread": [
                445
            ],
            "waitForCompletion": [
                4
            ],
            "__typename": [
                1
            ]
        },
        "RunAgentMessageAttachmentInput": {
            "fileId": [
                504
            ],
            "filename": [
                1
            ],
            "__typename": [
                1
            ]
        },
        "RunAgentMessageInput": {
            "attachments": [
                441
            ],
            "content": [
                1
            ],
            "role": [
                443
            ],
            "__typename": [
                1
            ]
        },
        "RunAgentMessageRole": {},
        "RunAgentResult": {
            "error": [
                1
            ],
            "result": [
                295
            ],
            "status": [
                1
            ],
            "success": [
                4
            ],
            "threadId": [
                504
            ],
            "__typename": [
                1
            ]
        },
        "RunAgentThreadInput": {
            "key": [
                1
            ],
            "title": [
                1
            ],
            "__typename": [
                1
            ]
        },
        "SSOConnection": {
            "id": [
                504
            ],
            "issuer": [
                1
            ],
            "name": [
                1
            ],
            "status": [
                448
            ],
            "type": [
                278
            ],
            "__typename": [
                1
            ]
        },
        "SSOIdentityProvider": {
            "id": [
                504
            ],
            "issuer": [
                1
            ],
            "name": [
                1
            ],
            "status": [
                448
            ],
            "type": [
                278
            ],
            "__typename": [
                1
            ]
        },
        "SSOIdentityProviderStatus": {},
        "SdkClientChecksums": {
            "core": [
                1
            ],
            "metadata": [
                1
            ],
            "__typename": [
                1
            ]
        },
        "SearchField": {
            "createdAt": [
                193
            ],
            "fieldMetadataId": [
                504
            ],
            "id": [
                504
            ],
            "position": [
                11
            ],
            "tsVectorFieldMetadataId": [
                504
            ],
            "updatedAt": [
                193
            ],
            "__typename": [
                1
            ]
        },
        "SendChatMessageResult": {
            "mentionedParticipantWorkspaceMemberIds": [
                504
            ],
            "messageId": [
                1
            ],
            "queued": [
                4
            ],
            "streamId": [
                1
            ],
            "__typename": [
                1
            ]
        },
        "SendEmailAttachmentInput": {
            "id": [
                1
            ],
            "name": [
                1
            ],
            "__typename": [
                1
            ]
        },
        "SendEmailInput": {
            "bcc": [
                1
            ],
            "body": [
                1
            ],
            "cc": [
                1
            ],
            "connectedAccountId": [
                1
            ],
            "draftMessageId": [
                1
            ],
            "files": [
                452
            ],
            "fromHandle": [
                1
            ],
            "inReplyTo": [
                1
            ],
            "subject": [
                1
            ],
            "to": [
                1
            ],
            "__typename": [
                1
            ]
        },
        "SendEmailOutput": {
            "error": [
                1
            ],
            "messageThreadId": [
                1
            ],
            "success": [
                4
            ],
            "__typename": [
                1
            ]
        },
        "SendEmailViaDomainOutput": {
            "messageId": [
                1
            ],
            "__typename": [
                1
            ]
        },
        "SendInboxMessageInput": {
            "idempotencyKey": [
                1
            ],
            "text": [
                1
            ],
            "threadKey": [
                1
            ],
            "title": [
                1
            ],
            "toolCall": [
                295
            ],
            "workspaceMemberIds": [
                504
            ],
            "__typename": [
                1
            ]
        },
        "SendInboxMessageResult": {
            "threadId": [
                504
            ],
            "__typename": [
                1
            ]
        },
        "SendInvitations": {
            "errors": [
                1
            ],
            "result": [
                643
            ],
            "success": [
                4
            ],
            "__typename": [
                1
            ]
        },
        "SendMessageCampaignInput": {
            "campaignId": [
                1
            ],
            "scheduledAt": [
                193
            ],
            "__typename": [
                1
            ]
        },
        "SendMessageCampaignOutputDTO": {
            "audience": [
                119
            ],
            "campaignId": [
                1
            ],
            "queuedCount": [
                8
            ],
            "__typename": [
                1
            ]
        },
        "SendMessageCampaignTestInput": {
            "body": [
                1
            ],
            "fromAddress": [
                1
            ],
            "subject": [
                1
            ],
            "toAddress": [
                1
            ],
            "unsubscribeTopicId": [
                1
            ],
            "__typename": [
                1
            ]
        },
        "Sentry": {
            "dsn": [
                1
            ],
            "environment": [
                1
            ],
            "release": [
                1
            ],
            "tracesSampleRate": [
                11
            ],
            "__typename": [
                1
            ]
        },
        "SetAppKeyValueInput": {
            "key": [
                1
            ],
            "scope": [
                34
            ],
            "value": [
                295
            ],
            "__typename": [
                1
            ]
        },
        "SettingsMenuItem": {
            "applicationId": [
                504
            ],
            "createdAt": [
                193
            ],
            "frontComponentId": [
                504
            ],
            "icon": [
                1
            ],
            "id": [
                504
            ],
            "position": [
                11
            ],
            "scope": [
                465
            ],
            "title": [
                1
            ],
            "universalIdentifier": [
                504
            ],
            "updatedAt": [
                193
            ],
            "__typename": [
                1
            ]
        },
        "SettingsMenuItemScope": {},
        "SetupOIDCSsoInput": {
            "clientID": [
                1
            ],
            "clientSecret": [
                1
            ],
            "issuer": [
                1
            ],
            "name": [
                1
            ],
            "__typename": [
                1
            ]
        },
        "SetupSAMLSsoInput": {
            "certificate": [
                1
            ],
            "fingerprint": [
                1
            ],
            "id": [
                504
            ],
            "issuer": [
                1
            ],
            "name": [
                1
            ],
            "ssoURL": [
                1
            ],
            "__typename": [
                1
            ]
        },
        "SetupSso": {
            "id": [
                504
            ],
            "issuer": [
                1
            ],
            "name": [
                1
            ],
            "status": [
                448
            ],
            "type": [
                278
            ],
            "__typename": [
                1
            ]
        },
        "SignUp": {
            "loginToken": [
                67
            ],
            "workspace": [
                655
            ],
            "__typename": [
                1
            ]
        },
        "SignUpInNewWorkspaceInput": {
            "displayName": [
                1
            ],
            "partner": [
                1
            ],
            "subdomain": [
                1
            ],
            "__typename": [
                1
            ]
        },
        "Skill": {
            "applicationId": [
                504
            ],
            "content": [
                1
            ],
            "createdAt": [
                193
            ],
            "description": [
                1
            ],
            "icon": [
                1
            ],
            "id": [
                504
            ],
            "isActive": [
                4
            ],
            "isCustom": [
                4
            ],
            "isSystem": [
                4
            ],
            "label": [
                1
            ],
            "name": [
                1
            ],
            "updatedAt": [
                193
            ],
            "__typename": [
                1
            ]
        },
        "StandaloneRichTextConfiguration": {
            "body": [
                430
            ],
            "configurationType": [
                631
            ],
            "__typename": [
                1
            ]
        },
        "StartWorkspaceSetupChatResult": {
            "outcome": [
                653
            ],
            "thread": [
                9
            ],
            "__typename": [
                1
            ]
        },
        "StopImpersonation": {
            "canRestoreImpersonatorSession": [
                4
            ],
            "__typename": [
                1
            ]
        },
        "SubdomainAvailabilityDTO": {
            "available": [
                4
            ],
            "isValid": [
                4
            ],
            "suggestedSubdomain": [
                1
            ],
            "suggestedSubdomains": [
                1
            ],
            "__typename": [
                1
            ]
        },
        "Subscription": {
            "eventLogsLive": [
                242,
                {
                    "fieldFilters": [
                        236,
                        "[EventLogFieldFilterInput!]"
                    ],
                    "table": [
                        243,
                        "EventLogTable!"
                    ]
                }
            ],
            "exportRecords": [
                410,
                {
                    "input": [
                        176,
                        "CreateRecordExportInput!"
                    ]
                }
            ],
            "logicFunctionLogs": [
                312,
                {
                    "input": [
                        313,
                        "LogicFunctionLogsInput!"
                    ]
                }
            ],
            "onAgentChatEvent": [
                5,
                {
                    "threadId": [
                        504,
                        "UUID!"
                    ]
                }
            ],
            "onEventSubscription": [
                244,
                {
                    "eventStreamId": [
                        1,
                        "String!"
                    ]
                }
            ],
            "__typename": [
                1
            ]
        },
        "SubscriptionInterval": {},
        "SubscriptionStatus": {},
        "Support": {
            "supportDriver": [
                480
            ],
            "supportFrontChatId": [
                1
            ],
            "__typename": [
                1
            ]
        },
        "SupportDriver": {},
        "TasksConfiguration": {
            "configurationType": [
                631
            ],
            "__typename": [
                1
            ]
        },
        "TimelineActivityType": {
            "action": [
                1
            ],
            "applicationId": [
                504
            ],
            "createdAt": [
                193
            ],
            "emit": [
                483
            ],
            "frontComponentUniversalIdentifier": [
                504
            ],
            "icon": [
                1
            ],
            "id": [
                504
            ],
            "isActive": [
                4
            ],
            "label": [
                1
            ],
            "name": [
                1
            ],
            "objectUniversalIdentifier": [
                504
            ],
            "replacesTimelineActivityTypeUniversalIdentifier": [
                504
            ],
            "universalIdentifier": [
                504
            ],
            "updatedAt": [
                193
            ],
            "__typename": [
                1
            ]
        },
        "TimelineActivityTypeEmit": {
            "objectUniversalIdentifier": [
                504
            ],
            "on": [
                1
            ],
            "through": [
                484
            ],
            "__typename": [
                1
            ]
        },
        "TimelineActivityTypeEmitThrough": {
            "happensAtFieldUniversalIdentifier": [
                504
            ],
            "relationFieldUniversalIdentifier": [
                504
            ],
            "triggerFieldUniversalIdentifiers": [
                504
            ],
            "__typename": [
                1
            ]
        },
        "TimelineConfiguration": {
            "configurationType": [
                631
            ],
            "__typename": [
                1
            ]
        },
        "ToolIndexEntry": {
            "category": [
                1
            ],
            "description": [
                1
            ],
            "frontComponentId": [
                1
            ],
            "icon": [
                1
            ],
            "inputSchema": [
                295
            ],
            "label": [
                1
            ],
            "name": [
                1
            ],
            "objectName": [
                1
            ],
            "widgetName": [
                1
            ],
            "__typename": [
                1
            ]
        },
        "TransientToken": {
            "transientToken": [
                67
            ],
            "__typename": [
                1
            ]
        },
        "TriggerAddPeopleToMessageListJobInput": {
            "messageListId": [
                504
            ],
            "personFilter": [
                295
            ],
            "__typename": [
                1
            ]
        },
        "TriggerAddPeopleToMessageListJobResult": {
            "jobId": [
                1
            ],
            "__typename": [
                1
            ]
        },
        "TriggerInstallApplicationInput": {
            "universalIdentifier": [
                1
            ],
            "__typename": [
                1
            ]
        },
        "TriggerInstallApplicationJobInput": {
            "universalIdentifier": [
                1
            ],
            "__typename": [
                1
            ]
        },
        "TriggerInstallApplicationJobResult": {
            "jobId": [
                1
            ],
            "__typename": [
                1
            ]
        },
        "TriggerInstallApplicationResult": {
            "jobId": [
                1
            ],
            "__typename": [
                1
            ]
        },
        "TriggerUninstallApplicationInput": {
            "universalIdentifier": [
                1
            ],
            "__typename": [
                1
            ]
        },
        "TriggerUninstallApplicationJobInput": {
            "universalIdentifier": [
                1
            ],
            "__typename": [
                1
            ]
        },
        "TriggerUninstallApplicationJobResult": {
            "jobId": [
                1
            ],
            "__typename": [
                1
            ]
        },
        "TriggerUninstallApplicationResult": {
            "jobId": [
                1
            ],
            "__typename": [
                1
            ]
        },
        "TriggerUpgradeApplicationInput": {
            "targetVersion": [
                1
            ],
            "universalIdentifier": [
                1
            ],
            "__typename": [
                1
            ]
        },
        "TriggerUpgradeApplicationResult": {
            "jobId": [
                1
            ],
            "__typename": [
                1
            ]
        },
        "TwoFactorAuthenticationMethodSummary": {
            "status": [
                1
            ],
            "strategy": [
                1
            ],
            "twoFactorAuthenticationMethodId": [
                504
            ],
            "__typename": [
                1
            ]
        },
        "TwoFactorAuthenticationRecoveryCode": {
            "expiresAt": [
                193
            ],
            "recoveryCode": [
                1
            ],
            "__typename": [
                1
            ]
        },
        "TwoFactorAuthenticationRecoveryCodeRedemption": {
            "provisioningUri": [
                1
            ],
            "tokens": [
                68
            ],
            "__typename": [
                1
            ]
        },
        "TwoFactorAuthenticationRecoveryStatus": {
            "hasVerifiedTwoFactorAuthenticationMethod": [
                4
            ],
            "isAwaitingRecoveryEnrollment": [
                4
            ],
            "pendingRecoveryCodeExpiresAt": [
                193
            ],
            "__typename": [
                1
            ]
        },
        "UUID": {},
        "UUIDFilterComparison": {
            "eq": [
                504
            ],
            "gt": [
                504
            ],
            "gte": [
                504
            ],
            "iLike": [
                504
            ],
            "in": [
                504
            ],
            "is": [
                4
            ],
            "isNot": [
                4
            ],
            "like": [
                504
            ],
            "lt": [
                504
            ],
            "lte": [
                504
            ],
            "neq": [
                504
            ],
            "notILike": [
                504
            ],
            "notIn": [
                504
            ],
            "notLike": [
                504
            ],
            "__typename": [
                1
            ]
        },
        "UnsubscribeHostnameStatus": {},
        "UnsubscribeTopic": {
            "createdAt": [
                193
            ],
            "description": [
                1
            ],
            "id": [
                504
            ],
            "name": [
                1
            ],
            "updatedAt": [
                193
            ],
            "visibility": [
                508
            ],
            "__typename": [
                1
            ]
        },
        "UnsubscribeTopicVisibility": {},
        "UpdateAgentInput": {
            "description": [
                1
            ],
            "icon": [
                1
            ],
            "id": [
                504
            ],
            "label": [
                1
            ],
            "modelConfiguration": [
                295
            ],
            "modelId": [
                1
            ],
            "name": [
                1
            ],
            "prompt": [
                1
            ],
            "responseFormat": [
                295
            ],
            "roleId": [
                504
            ],
            "triggers": [
                295
            ],
            "__typename": [
                1
            ]
        },
        "UpdateApiKeyInput": {
            "expiresAt": [
                1
            ],
            "id": [
                504
            ],
            "name": [
                1
            ],
            "revokedAt": [
                1
            ],
            "__typename": [
                1
            ]
        },
        "UpdateAppMessageChannelInput": {
            "displayName": [
                1
            ],
            "id": [
                504
            ],
            "isSyncEnabled": [
                4
            ],
            "visibility": [
                332
            ],
            "__typename": [
                1
            ]
        },
        "UpdateApplicationInput": {
            "autoUpgrade": [
                4
            ],
            "__typename": [
                1
            ]
        },
        "UpdateApplicationRegistrationInput": {
            "id": [
                1
            ],
            "update": [
                514
            ],
            "__typename": [
                1
            ]
        },
        "UpdateApplicationRegistrationPayload": {
            "name": [
                1
            ],
            "oAuthRedirectUris": [
                1
            ],
            "oAuthScopes": [
                1
            ],
            "__typename": [
                1
            ]
        },
        "UpdateApplicationRegistrationVariableInput": {
            "id": [
                1
            ],
            "update": [
                516
            ],
            "__typename": [
                1
            ]
        },
        "UpdateApplicationRegistrationVariablePayload": {
            "description": [
                1
            ],
            "resetValue": [
                4
            ],
            "value": [
                1
            ],
            "__typename": [
                1
            ]
        },
        "UpdateCalendarChannelInput": {
            "id": [
                504
            ],
            "update": [
                518
            ],
            "__typename": [
                1
            ]
        },
        "UpdateCalendarChannelInputUpdates": {
            "contactAutoCreationPolicy": [
                112
            ],
            "excludePrivateEvents": [
                4
            ],
            "isContactAutoCreationEnabled": [
                4
            ],
            "isSyncEnabled": [
                4
            ],
            "visibility": [
                115
            ],
            "__typename": [
                1
            ]
        },
        "UpdateCommandMenuItemInput": {
            "availabilityObjectMetadataId": [
                504
            ],
            "availabilityType": [
                139
            ],
            "engineComponentKey": [
                227
            ],
            "hotKeys": [
                1
            ],
            "icon": [
                1
            ],
            "id": [
                504
            ],
            "isPinned": [
                4
            ],
            "label": [
                1
            ],
            "pageLayoutId": [
                504
            ],
            "position": [
                11
            ],
            "shortLabel": [
                1
            ],
            "__typename": [
                1
            ]
        },
        "UpdateEmailGroupChannelInput": {
            "displayName": [
                1
            ],
            "id": [
                504
            ],
            "__typename": [
                1
            ]
        },
        "UpdateFieldInput": {
            "defaultValue": [
                295
            ],
            "description": [
                1
            ],
            "icon": [
                1
            ],
            "isActive": [
                4
            ],
            "isAuditLogged": [
                4
            ],
            "isLabelSyncedWithName": [
                4
            ],
            "isNullable": [
                4
            ],
            "isSearchable": [
                4
            ],
            "isSystem": [
                4
            ],
            "isUIEditable": [
                4
            ],
            "isUIReadOnly": [
                4
            ],
            "isUnique": [
                4
            ],
            "label": [
                1
            ],
            "morphRelationsUpdatePayload": [
                295
            ],
            "name": [
                1
            ],
            "objectMetadataId": [
                504
            ],
            "options": [
                295
            ],
            "settings": [
                295
            ],
            "translations": [
                345
            ],
            "universalIdentifier": [
                1
            ],
            "__typename": [
                1
            ]
        },
        "UpdateFrontComponentInput": {
            "id": [
                504
            ],
            "update": [
                523
            ],
            "__typename": [
                1
            ]
        },
        "UpdateFrontComponentInputUpdates": {
            "description": [
                1
            ],
            "name": [
                1
            ],
            "__typename": [
                1
            ]
        },
        "UpdateLabPublicFeatureFlagInput": {
            "publicFeatureFlag": [
                1
            ],
            "value": [
                4
            ],
            "__typename": [
                1
            ]
        },
        "UpdateLogicFunctionFromSourceInput": {
            "id": [
                504
            ],
            "update": [
                526
            ],
            "__typename": [
                1
            ]
        },
        "UpdateLogicFunctionFromSourceInputUpdates": {
            "cronTriggerSettings": [
                295
            ],
            "databaseEventTriggerSettings": [
                295
            ],
            "description": [
                1
            ],
            "handlerName": [
                1
            ],
            "httpRouteTriggerSettings": [
                295
            ],
            "name": [
                1
            ],
            "sourceHandlerCode": [
                1
            ],
            "sourceHandlerPath": [
                1
            ],
            "timeoutSeconds": [
                11
            ],
            "toolTriggerSettings": [
                295
            ],
            "workflowActionTriggerSettings": [
                295
            ],
            "__typename": [
                1
            ]
        },
        "UpdateMcpServerInput": {
            "id": [
                504
            ],
            "update": [
                528
            ],
            "__typename": [
                1
            ]
        },
        "UpdateMcpServerInputUpdates": {
            "authorizationHeaderValue": [
                1
            ],
            "isEnabled": [
                4
            ],
            "label": [
                1
            ],
            "name": [
                1
            ],
            "url": [
                1
            ],
            "__typename": [
                1
            ]
        },
        "UpdateMessageChannelInput": {
            "id": [
                504
            ],
            "update": [
                530
            ],
            "__typename": [
                1
            ]
        },
        "UpdateMessageChannelInputUpdates": {
            "contactAutoCreationPolicy": [
                327
            ],
            "excludeGroupEmails": [
                4
            ],
            "excludeNonProfessionalEmails": [
                4
            ],
            "isContactAutoCreationEnabled": [
                4
            ],
            "isSyncEnabled": [
                4
            ],
            "messageFolderImportPolicy": [
                334
            ],
            "visibility": [
                332
            ],
            "__typename": [
                1
            ]
        },
        "UpdateMessageFolderInput": {
            "id": [
                504
            ],
            "update": [
                532
            ],
            "__typename": [
                1
            ]
        },
        "UpdateMessageFolderInputUpdates": {
            "isSynced": [
                4
            ],
            "__typename": [
                1
            ]
        },
        "UpdateMessageFoldersInput": {
            "ids": [
                504
            ],
            "update": [
                532
            ],
            "__typename": [
                1
            ]
        },
        "UpdateNavigationMenuItemInput": {
            "color": [
                1
            ],
            "folderId": [
                504
            ],
            "icon": [
                1
            ],
            "link": [
                1
            ],
            "name": [
                1
            ],
            "pageLayoutId": [
                504
            ],
            "position": [
                11
            ],
            "__typename": [
                1
            ]
        },
        "UpdateObjectPayload": {
            "color": [
                1
            ],
            "description": [
                1
            ],
            "icon": [
                1
            ],
            "imageIdentifierFieldMetadataId": [
                504
            ],
            "isActive": [
                4
            ],
            "isLabelSyncedWithName": [
                4
            ],
            "isSearchable": [
                4
            ],
            "labelIdentifierFieldMetadataId": [
                504
            ],
            "labelPlural": [
                1
            ],
            "labelSingular": [
                1
            ],
            "namePlural": [
                1
            ],
            "nameSingular": [
                1
            ],
            "openRecordIn": [
                365
            ],
            "readability": [
                343
            ],
            "sharingReach": [
                373
            ],
            "shortcut": [
                1
            ],
            "translations": [
                345
            ],
            "__typename": [
                1
            ]
        },
        "UpdateOneFieldMetadataInput": {
            "id": [
                504
            ],
            "update": [
                521
            ],
            "__typename": [
                1
            ]
        },
        "UpdateOneNavigationMenuItemInput": {
            "id": [
                504
            ],
            "update": [
                534
            ],
            "__typename": [
                1
            ]
        },
        "UpdateOneObjectInput": {
            "id": [
                504
            ],
            "update": [
                535
            ],
            "__typename": [
                1
            ]
        },
        "UpdatePageLayoutInput": {
            "name": [
                1
            ],
            "objectMetadataId": [
                504
            ],
            "type": [
                382
            ],
            "__typename": [
                1
            ]
        },
        "UpdatePageLayoutTabInput": {
            "icon": [
                1
            ],
            "layoutMode": [
                381
            ],
            "position": [
                11
            ],
            "title": [
                1
            ],
            "__typename": [
                1
            ]
        },
        "UpdatePageLayoutTabWithWidgetsInput": {
            "icon": [
                1
            ],
            "id": [
                504
            ],
            "layoutMode": [
                381
            ],
            "position": [
                11
            ],
            "title": [
                1
            ],
            "widgets": [
                543
            ],
            "__typename": [
                1
            ]
        },
        "UpdatePageLayoutWidgetInput": {
            "conditionalAvailabilityExpression": [
                1
            ],
            "conditionalDisplay": [
                295
            ],
            "configuration": [
                295
            ],
            "isActive": [
                4
            ],
            "objectMetadataId": [
                504
            ],
            "pageLayoutTabId": [
                504
            ],
            "position": [
                295
            ],
            "title": [
                1
            ],
            "type": [
                632
            ],
            "__typename": [
                1
            ]
        },
        "UpdatePageLayoutWidgetWithIdInput": {
            "conditionalAvailabilityExpression": [
                1
            ],
            "conditionalDisplay": [
                295
            ],
            "configuration": [
                295
            ],
            "id": [
                504
            ],
            "objectMetadataId": [
                504
            ],
            "pageLayoutTabId": [
                504
            ],
            "position": [
                295
            ],
            "title": [
                1
            ],
            "type": [
                632
            ],
            "__typename": [
                1
            ]
        },
        "UpdatePageLayoutWithTabsInput": {
            "isFirstTabPinned": [
                4
            ],
            "name": [
                1
            ],
            "objectMetadataId": [
                504
            ],
            "tabs": [
                541
            ],
            "type": [
                382
            ],
            "__typename": [
                1
            ]
        },
        "UpdateRoleInput": {
            "id": [
                504
            ],
            "update": [
                546
            ],
            "__typename": [
                1
            ]
        },
        "UpdateRolePayload": {
            "canAccessAllTools": [
                4
            ],
            "canBeAssignedToAgents": [
                4
            ],
            "canBeAssignedToApiKeys": [
                4
            ],
            "canBeAssignedToUsers": [
                4
            ],
            "canDestroyAllObjectRecords": [
                4
            ],
            "canReadAllObjectRecords": [
                4
            ],
            "canSoftDeleteAllObjectRecords": [
                4
            ],
            "canUpdateAllObjectRecords": [
                4
            ],
            "canUpdateAllSettings": [
                4
            ],
            "description": [
                1
            ],
            "icon": [
                1
            ],
            "label": [
                1
            ],
            "__typename": [
                1
            ]
        },
        "UpdateSkillInput": {
            "content": [
                1
            ],
            "description": [
                1
            ],
            "icon": [
                1
            ],
            "id": [
                504
            ],
            "isActive": [
                4
            ],
            "label": [
                1
            ],
            "name": [
                1
            ],
            "__typename": [
                1
            ]
        },
        "UpdateTimelineActivityTypeInput": {
            "icon": [
                1
            ],
            "id": [
                504
            ],
            "isActive": [
                4
            ],
            "label": [
                1
            ],
            "translations": [
                345
            ],
            "__typename": [
                1
            ]
        },
        "UpdateUnsubscribeTopicInput": {
            "description": [
                1
            ],
            "id": [
                1
            ],
            "name": [
                1
            ],
            "visibility": [
                508
            ],
            "__typename": [
                1
            ]
        },
        "UpdateUsageLimitInput": {
            "id": [
                504
            ],
            "payload": [
                180
            ],
            "__typename": [
                1
            ]
        },
        "UpdateValidationRuleInput": {
            "id": [
                504
            ],
            "update": [
                552
            ],
            "__typename": [
                1
            ]
        },
        "UpdateValidationRuleInputUpdates": {
            "description": [
                1
            ],
            "errorFieldMetadataId": [
                504
            ],
            "expression": [
                1
            ],
            "icon": [
                1
            ],
            "isActive": [
                4
            ],
            "message": [
                1
            ],
            "name": [
                1
            ],
            "__typename": [
                1
            ]
        },
        "UpdateViewFieldGroupInput": {
            "id": [
                504
            ],
            "update": [
                554
            ],
            "__typename": [
                1
            ]
        },
        "UpdateViewFieldGroupInputUpdates": {
            "deletedAt": [
                1
            ],
            "isVisible": [
                4
            ],
            "name": [
                1
            ],
            "position": [
                11
            ],
            "__typename": [
                1
            ]
        },
        "UpdateViewFieldInput": {
            "id": [
                504
            ],
            "update": [
                556
            ],
            "__typename": [
                1
            ]
        },
        "UpdateViewFieldInputUpdates": {
            "aggregateOperation": [
                20
            ],
            "isVisible": [
                4
            ],
            "position": [
                11
            ],
            "size": [
                11
            ],
            "viewFieldGroupId": [
                504
            ],
            "__typename": [
                1
            ]
        },
        "UpdateViewFilterGroupInput": {
            "id": [
                504
            ],
            "logicalOperator": [
                620
            ],
            "parentViewFilterGroupId": [
                504
            ],
            "positionInViewFilterGroup": [
                11
            ],
            "viewId": [
                504
            ],
            "__typename": [
                1
            ]
        },
        "UpdateViewFilterInput": {
            "id": [
                504
            ],
            "update": [
                559
            ],
            "__typename": [
                1
            ]
        },
        "UpdateViewFilterInputUpdates": {
            "fieldMetadataId": [
                504
            ],
            "operand": [
                621
            ],
            "positionInViewFilterGroup": [
                11
            ],
            "relationTargetFieldMetadataId": [
                504
            ],
            "subFieldName": [
                1
            ],
            "value": [
                295
            ],
            "viewFilterGroupId": [
                504
            ],
            "__typename": [
                1
            ]
        },
        "UpdateViewGroupInput": {
            "id": [
                504
            ],
            "update": [
                561
            ],
            "__typename": [
                1
            ]
        },
        "UpdateViewGroupInputUpdates": {
            "fieldMetadataId": [
                504
            ],
            "fieldValue": [
                1
            ],
            "isVisible": [
                4
            ],
            "position": [
                11
            ],
            "__typename": [
                1
            ]
        },
        "UpdateViewInput": {
            "anyFieldFilterValue": [
                1
            ],
            "calendarEndFieldMetadataId": [
                504
            ],
            "calendarFieldMetadataId": [
                504
            ],
            "calendarLayout": [
                614
            ],
            "groupLoadLimit": [
                8
            ],
            "icon": [
                1
            ],
            "id": [
                504
            ],
            "isCompact": [
                4
            ],
            "kanbanAggregateOperation": [
                20
            ],
            "kanbanAggregateOperationFieldMetadataId": [
                504
            ],
            "kanbanColumnWidth": [
                8
            ],
            "mainGroupByFieldMetadataId": [
                504
            ],
            "name": [
                1
            ],
            "openRecordIn": [
                624
            ],
            "position": [
                11
            ],
            "shouldHideEmptyGroups": [
                4
            ],
            "type": [
                627
            ],
            "visibility": [
                628
            ],
            "__typename": [
                1
            ]
        },
        "UpdateViewSortInput": {
            "id": [
                504
            ],
            "update": [
                564
            ],
            "__typename": [
                1
            ]
        },
        "UpdateViewSortInputUpdates": {
            "direction": [
                626
            ],
            "subFieldName": [
                1
            ],
            "__typename": [
                1
            ]
        },
        "UpdateWebhookInput": {
            "id": [
                504
            ],
            "update": [
                566
            ],
            "__typename": [
                1
            ]
        },
        "UpdateWebhookInputUpdates": {
            "description": [
                1
            ],
            "operations": [
                1
            ],
            "secret": [
                1
            ],
            "targetUrl": [
                1
            ],
            "__typename": [
                1
            ]
        },
        "UpdateWorkspaceAllowedIframeOriginsInput": {
            "operation": [
                1
            ],
            "origin": [
                1
            ],
            "__typename": [
                1
            ]
        },
        "UpdateWorkspaceInput": {
            "aiAdditionalInstructions": [
                1
            ],
            "aiAgentModelTier": [
                22
            ],
            "aiChatModelTier": [
                22
            ],
            "aiEvaluationModelId": [
                1
            ],
            "aiModelIdByTier": [
                295
            ],
            "allowImpersonation": [
                4
            ],
            "customDomain": [
                1
            ],
            "defaultRoleId": [
                504
            ],
            "displayName": [
                1
            ],
            "editableProfileFields": [
                1
            ],
            "eventLogRetentionDays": [
                11
            ],
            "inviteHash": [
                1
            ],
            "isAutoModelSelectionEnabled": [
                4
            ],
            "isCampaignClickTrackingEnabled": [
                4
            ],
            "isCampaignOpenTrackingEnabled": [
                4
            ],
            "isGoogleAuthBypassEnabled": [
                4
            ],
            "isGoogleAuthEnabled": [
                4
            ],
            "isInternalMessagesImportEnabled": [
                4
            ],
            "isMicrosoftAuthBypassEnabled": [
                4
            ],
            "isMicrosoftAuthEnabled": [
                4
            ],
            "isPasswordAuthBypassEnabled": [
                4
            ],
            "isPasswordAuthEnabled": [
                4
            ],
            "isPublicInviteLinkEnabled": [
                4
            ],
            "isTwoFactorAuthenticationEnforced": [
                4
            ],
            "logo": [
                1
            ],
            "subdomain": [
                1
            ],
            "trashRetentionDays": [
                11
            ],
            "workspaceDiscoverability": [
                642
            ],
            "__typename": [
                1
            ]
        },
        "UpdateWorkspaceMemberSettingsInput": {
            "update": [
                295
            ],
            "workspaceMemberId": [
                504
            ],
            "__typename": [
                1
            ]
        },
        "Upload": {},
        "UpsertFieldPermissionsInput": {
            "fieldPermissions": [
                256
            ],
            "roleId": [
                504
            ],
            "__typename": [
                1
            ]
        },
        "UpsertFieldsWidgetFieldInput": {
            "fieldMetadataId": [
                504
            ],
            "isVisible": [
                4
            ],
            "position": [
                11
            ],
            "viewFieldId": [
                504
            ],
            "__typename": [
                1
            ]
        },
        "UpsertFieldsWidgetGroupInput": {
            "fields": [
                572
            ],
            "id": [
                504
            ],
            "isVisible": [
                4
            ],
            "name": [
                1
            ],
            "position": [
                11
            ],
            "__typename": [
                1
            ]
        },
        "UpsertFieldsWidgetInput": {
            "fields": [
                572
            ],
            "groups": [
                573
            ],
            "widgetId": [
                504
            ],
            "__typename": [
                1
            ]
        },
        "UpsertObjectPermissionsInput": {
            "objectPermissions": [
                367
            ],
            "roleId": [
                504
            ],
            "__typename": [
                1
            ]
        },
        "UpsertPermissionFlagsInput": {
            "permissionFlagKeys": [
                1
            ],
            "roleId": [
                504
            ],
            "__typename": [
                1
            ]
        },
        "UpsertRowLevelPermissionPredicatesInput": {
            "objectMetadataId": [
                504
            ],
            "predicateGroups": [
                436
            ],
            "predicates": [
                438
            ],
            "roleId": [
                504
            ],
            "__typename": [
                1
            ]
        },
        "UpsertRowLevelPermissionPredicatesResult": {
            "predicateGroups": [
                435
            ],
            "predicates": [
                434
            ],
            "__typename": [
                1
            ]
        },
        "UpsertViewWidgetInput": {
            "view": [
                583
            ],
            "viewFields": [
                580
            ],
            "viewFilterGroups": [
                581
            ],
            "viewFilters": [
                582
            ],
            "viewSorts": [
                584
            ],
            "widgetId": [
                504
            ],
            "__typename": [
                1
            ]
        },
        "UpsertViewWidgetViewFieldInput": {
            "aggregateOperation": [
                20
            ],
            "fieldMetadataId": [
                504
            ],
            "isVisible": [
                4
            ],
            "position": [
                11
            ],
            "size": [
                11
            ],
            "viewFieldId": [
                504
            ],
            "__typename": [
                1
            ]
        },
        "UpsertViewWidgetViewFilterGroupInput": {
            "id": [
                504
            ],
            "logicalOperator": [
                620
            ],
            "parentViewFilterGroupId": [
                504
            ],
            "positionInViewFilterGroup": [
                11
            ],
            "__typename": [
                1
            ]
        },
        "UpsertViewWidgetViewFilterInput": {
            "fieldMetadataId": [
                504
            ],
            "id": [
                504
            ],
            "operand": [
                621
            ],
            "positionInViewFilterGroup": [
                11
            ],
            "relationTargetFieldMetadataId": [
                504
            ],
            "subFieldName": [
                1
            ],
            "value": [
                295
            ],
            "viewFilterGroupId": [
                504
            ],
            "__typename": [
                1
            ]
        },
        "UpsertViewWidgetViewSettingsInput": {
            "calendarEndFieldMetadataId": [
                504
            ],
            "calendarFieldMetadataId": [
                504
            ],
            "calendarLayout": [
                614
            ],
            "kanbanAggregateOperation": [
                20
            ],
            "kanbanAggregateOperationFieldMetadataId": [
                504
            ],
            "kanbanColumnWidth": [
                8
            ],
            "mainGroupByFieldMetadataId": [
                504
            ],
            "openRecordIn": [
                624
            ],
            "shouldHideEmptyGroups": [
                4
            ],
            "type": [
                627
            ],
            "__typename": [
                1
            ]
        },
        "UpsertViewWidgetViewSortInput": {
            "direction": [
                626
            ],
            "fieldMetadataId": [
                504
            ],
            "id": [
                504
            ],
            "__typename": [
                1
            ]
        },
        "UsageAnalytics": {
            "periodEnd": [
                193
            ],
            "periodStart": [
                193
            ],
            "timeSeries": [
                598
            ],
            "usageByApplication": [
                587
            ],
            "usageByModel": [
                587
            ],
            "usageByOperationType": [
                587
            ],
            "usageByUser": [
                587
            ],
            "userDailyUsage": [
                600
            ],
            "__typename": [
                1
            ]
        },
        "UsageAnalyticsInput": {
            "operationTypes": [
                590
            ],
            "periodEnd": [
                193
            ],
            "periodStart": [
                193
            ],
            "userWorkspaceId": [
                1
            ],
            "__typename": [
                1
            ]
        },
        "UsageBreakdownItem": {
            "creditsUsed": [
                11
            ],
            "key": [
                1
            ],
            "label": [
                1
            ],
            "userCreditsUsed": [
                11
            ],
            "workspaceCreditsUsed": [
                11
            ],
            "__typename": [
                1
            ]
        },
        "UsageLimit": {
            "burstValue": [
                82
            ],
            "createdAt": [
                193
            ],
            "id": [
                504
            ],
            "limitKind": [
                1
            ],
            "limitValue": [
                82
            ],
            "operationType": [
                590
            ],
            "periodCount": [
                8
            ],
            "periodUnit": [
                1
            ],
            "resourceType": [
                597
            ],
            "spenderId": [
                1
            ],
            "spenderType": [
                1
            ],
            "unit": [
                599
            ],
            "updatedAt": [
                193
            ],
            "__typename": [
                1
            ]
        },
        "UsageLimitOperationDefinition": {
            "allowedUnits": [
                599
            ],
            "operationType": [
                590
            ],
            "__typename": [
                1
            ]
        },
        "UsageOperationType": {},
        "UsageQuotaDefinition": {
            "allowedOperations": [
                589
            ],
            "allowedSpenderTypes": [
                1
            ],
            "limitKind": [
                1
            ],
            "operatorOnlyScopes": [
                593
            ],
            "resourceType": [
                597
            ],
            "__typename": [
                1
            ]
        },
        "UsageQuotaDefinitions": {
            "definitions": [
                591
            ],
            "hasAllowancePeriod": [
                4
            ],
            "isIntraWorkspaceLimitEntitled": [
                4
            ],
            "__typename": [
                1
            ]
        },
        "UsageQuotaOperatorOnlyScope": {
            "operationType": [
                590
            ],
            "periodUnit": [
                1
            ],
            "spenderType": [
                1
            ],
            "unit": [
                599
            ],
            "__typename": [
                1
            ]
        },
        "UsageQuotaScopeConsumption": {
            "consumedValue": [
                82
            ],
            "periodEnd": [
                193
            ],
            "periodStart": [
                193
            ],
            "__typename": [
                1
            ]
        },
        "UsageQuotaScopeInput": {
            "operationType": [
                590
            ],
            "periodUnit": [
                1
            ],
            "resourceType": [
                597
            ],
            "spenderId": [
                1
            ],
            "spenderType": [
                1
            ],
            "unit": [
                599
            ],
            "__typename": [
                1
            ]
        },
        "UsageQuotaWithConsumption": {
            "consumedValue": [
                82
            ],
            "id": [
                504
            ],
            "isEnforced": [
                4
            ],
            "limitValue": [
                82
            ],
            "operationType": [
                590
            ],
            "periodEnd": [
                193
            ],
            "periodStart": [
                193
            ],
            "periodUnit": [
                1
            ],
            "remainingValue": [
                82
            ],
            "resourceType": [
                597
            ],
            "spenderId": [
                1
            ],
            "spenderLabel": [
                1
            ],
            "spenderType": [
                1
            ],
            "unit": [
                599
            ],
            "__typename": [
                1
            ]
        },
        "UsageResourceType": {},
        "UsageTimeSeries": {
            "creditsUsed": [
                11
            ],
            "date": [
                1
            ],
            "workspaceCreditsUsed": [
                11
            ],
            "__typename": [
                1
            ]
        },
        "UsageUnit": {},
        "UsageUserDaily": {
            "dailyUsage": [
                598
            ],
            "userWorkspaceId": [
                1
            ],
            "__typename": [
                1
            ]
        },
        "User": {
            "availableWorkspaces": [
                73
            ],
            "canAccessFullAdminPanel": [
                4
            ],
            "canImpersonate": [
                4
            ],
            "createdAt": [
                193
            ],
            "currentUserWorkspace": [
                605
            ],
            "currentWorkspace": [
                636
            ],
            "deletedAt": [
                193
            ],
            "deletedWorkspaceMembers": [
                206
            ],
            "disabled": [
                4
            ],
            "email": [
                1
            ],
            "firstName": [
                1
            ],
            "hasPassword": [
                4
            ],
            "id": [
                504
            ],
            "isEmailVerified": [
                4
            ],
            "isWorkspaceCreator": [
                4
            ],
            "lastName": [
                1
            ],
            "locale": [
                1
            ],
            "onboardingStatus": [
                374
            ],
            "previousOnboardingStatus": [
                374
            ],
            "supportUserHash": [
                1
            ],
            "updatedAt": [
                193
            ],
            "userVars": [
                296
            ],
            "userWorkspaces": [
                605
            ],
            "workspaceMember": [
                645
            ],
            "workspaceMembers": [
                645
            ],
            "workspaces": [
                605
            ],
            "__typename": [
                1
            ]
        },
        "UserApplicationVariableValue": {
            "description": [
                1
            ],
            "isDeprecated": [
                4
            ],
            "isRequired": [
                4
            ],
            "isSecret": [
                4
            ],
            "key": [
                1
            ],
            "label": [
                1
            ],
            "options": [
                295
            ],
            "type": [
                1
            ],
            "value": [
                1
            ],
            "__typename": [
                1
            ]
        },
        "UserCreditsFallback": {},
        "UserSession": {
            "authProvider": [
                1
            ],
            "createdAt": [
                193
            ],
            "expiresAt": [
                193
            ],
            "id": [
                504
            ],
            "ipAddress": [
                1
            ],
            "isCurrent": [
                4
            ],
            "isImpersonating": [
                4
            ],
            "lastActiveAt": [
                193
            ],
            "userAgent": [
                1
            ],
            "workspaceId": [
                504
            ],
            "__typename": [
                1
            ]
        },
        "UserWorkspace": {
            "createdAt": [
                193
            ],
            "deletedAt": [
                193
            ],
            "id": [
                504
            ],
            "isImpersonating": [
                4
            ],
            "locale": [
                1
            ],
            "objectPermissions": [
                366
            ],
            "objectsPermissions": [
                366
            ],
            "permissionFlags": [
                391
            ],
            "twoFactorAuthenticationMethodSummary": [
                500
            ],
            "updatedAt": [
                193
            ],
            "user": [
                601
            ],
            "userId": [
                504
            ],
            "__typename": [
                1
            ]
        },
        "ValidateApprovedAccessDomainInput": {
            "approvedAccessDomainId": [
                504
            ],
            "validationToken": [
                1
            ],
            "__typename": [
                1
            ]
        },
        "ValidatePasswordResetToken": {
            "email": [
                1
            ],
            "hasPassword": [
                4
            ],
            "id": [
                504
            ],
            "__typename": [
                1
            ]
        },
        "ValidationRule": {
            "description": [
                1
            ],
            "errorFieldMetadataId": [
                504
            ],
            "expression": [
                1
            ],
            "icon": [
                1
            ],
            "id": [
                504
            ],
            "isActive": [
                4
            ],
            "message": [
                1
            ],
            "name": [
                1
            ],
            "objectMetadataId": [
                504
            ],
            "__typename": [
                1
            ]
        },
        "VerificationRecord": {
            "key": [
                1
            ],
            "priority": [
                11
            ],
            "status": [
                1
            ],
            "type": [
                1
            ],
            "value": [
                1
            ],
            "__typename": [
                1
            ]
        },
        "VerifyEmailAndGetLoginToken": {
            "loginToken": [
                67
            ],
            "workspaceUrls": [
                654
            ],
            "__typename": [
                1
            ]
        },
        "VerifyTwoFactorAuthenticationMethod": {
            "success": [
                4
            ],
            "__typename": [
                1
            ]
        },
        "VersionDistributionEntry": {
            "count": [
                8
            ],
            "version": [
                1
            ],
            "__typename": [
                1
            ]
        },
        "View": {
            "anyFieldFilterValue": [
                1
            ],
            "applicationId": [
                504
            ],
            "calendarEndFieldMetadataId": [
                504
            ],
            "calendarFieldMetadataId": [
                504
            ],
            "calendarLayout": [
                614
            ],
            "createdAt": [
                193
            ],
            "createdByUserWorkspaceId": [
                504
            ],
            "deletedAt": [
                193
            ],
            "groupLoadLimit": [
                8
            ],
            "icon": [
                1
            ],
            "id": [
                504
            ],
            "isActive": [
                4
            ],
            "isCompact": [
                4
            ],
            "isCustom": [
                4
            ],
            "isSystemSideEffect": [
                4
            ],
            "kanbanAggregateOperation": [
                20
            ],
            "kanbanAggregateOperationFieldMetadataId": [
                504
            ],
            "kanbanColumnWidth": [
                8
            ],
            "key": [
                623
            ],
            "mainGroupByFieldMetadataId": [
                504
            ],
            "name": [
                1
            ],
            "objectMetadataId": [
                504
            ],
            "openRecordIn": [
                624
            ],
            "position": [
                11
            ],
            "shouldHideEmptyGroups": [
                4
            ],
            "type": [
                627
            ],
            "universalIdentifier": [
                504
            ],
            "updatedAt": [
                193
            ],
            "viewFieldGroups": [
                617
            ],
            "viewFields": [
                616
            ],
            "viewFilterGroups": [
                619
            ],
            "viewFilters": [
                618
            ],
            "viewGroups": [
                622
            ],
            "viewSorts": [
                625
            ],
            "visibility": [
                628
            ],
            "workspaceId": [
                504
            ],
            "__typename": [
                1
            ]
        },
        "ViewCalendarLayout": {},
        "ViewConfiguration": {
            "configurationType": [
                631
            ],
            "__typename": [
                1
            ]
        },
        "ViewField": {
            "aggregateOperation": [
                20
            ],
            "applicationId": [
                504
            ],
            "createdAt": [
                193
            ],
            "deletedAt": [
                193
            ],
            "fieldMetadataId": [
                504
            ],
            "id": [
                504
            ],
            "isActive": [
                4
            ],
            "isOverridden": [
                4
            ],
            "isSystemSideEffect": [
                4
            ],
            "isVisible": [
                4
            ],
            "position": [
                11
            ],
            "size": [
                11
            ],
            "universalIdentifier": [
                504
            ],
            "updatedAt": [
                193
            ],
            "viewFieldGroupId": [
                504
            ],
            "viewId": [
                504
            ],
            "workspaceId": [
                504
            ],
            "__typename": [
                1
            ]
        },
        "ViewFieldGroup": {
            "createdAt": [
                193
            ],
            "deletedAt": [
                193
            ],
            "id": [
                504
            ],
            "isActive": [
                4
            ],
            "isOverridden": [
                4
            ],
            "isVisible": [
                4
            ],
            "name": [
                1
            ],
            "position": [
                11
            ],
            "updatedAt": [
                193
            ],
            "viewFields": [
                616
            ],
            "viewId": [
                504
            ],
            "workspaceId": [
                504
            ],
            "__typename": [
                1
            ]
        },
        "ViewFilter": {
            "createdAt": [
                193
            ],
            "deletedAt": [
                193
            ],
            "fieldMetadataId": [
                504
            ],
            "id": [
                504
            ],
            "operand": [
                621
            ],
            "positionInViewFilterGroup": [
                11
            ],
            "relationTargetFieldMetadataId": [
                504
            ],
            "subFieldName": [
                1
            ],
            "updatedAt": [
                193
            ],
            "value": [
                295
            ],
            "viewFilterGroupId": [
                504
            ],
            "viewId": [
                504
            ],
            "workspaceId": [
                504
            ],
            "__typename": [
                1
            ]
        },
        "ViewFilterGroup": {
            "createdAt": [
                193
            ],
            "deletedAt": [
                193
            ],
            "id": [
                504
            ],
            "logicalOperator": [
                620
            ],
            "parentViewFilterGroupId": [
                504
            ],
            "positionInViewFilterGroup": [
                11
            ],
            "updatedAt": [
                193
            ],
            "viewId": [
                504
            ],
            "workspaceId": [
                504
            ],
            "__typename": [
                1
            ]
        },
        "ViewFilterGroupLogicalOperator": {},
        "ViewFilterOperand": {},
        "ViewGroup": {
            "createdAt": [
                193
            ],
            "deletedAt": [
                193
            ],
            "fieldValue": [
                1
            ],
            "id": [
                504
            ],
            "isVisible": [
                4
            ],
            "position": [
                11
            ],
            "updatedAt": [
                193
            ],
            "viewId": [
                504
            ],
            "workspaceId": [
                504
            ],
            "__typename": [
                1
            ]
        },
        "ViewKey": {},
        "ViewOpenRecordIn": {},
        "ViewSort": {
            "createdAt": [
                193
            ],
            "deletedAt": [
                193
            ],
            "direction": [
                626
            ],
            "fieldMetadataId": [
                504
            ],
            "id": [
                504
            ],
            "subFieldName": [
                1
            ],
            "updatedAt": [
                193
            ],
            "viewId": [
                504
            ],
            "workspaceId": [
                504
            ],
            "__typename": [
                1
            ]
        },
        "ViewSortDirection": {},
        "ViewType": {},
        "ViewVisibility": {},
        "Webhook": {
            "applicationId": [
                504
            ],
            "createdAt": [
                193
            ],
            "deletedAt": [
                193
            ],
            "description": [
                1
            ],
            "id": [
                504
            ],
            "operations": [
                1
            ],
            "secret": [
                1
            ],
            "targetUrl": [
                1
            ],
            "updatedAt": [
                193
            ],
            "__typename": [
                1
            ]
        },
        "WidgetConfiguration": {
            "on_AggregateChartConfiguration": [
                19
            ],
            "on_BarChartConfiguration": [
                76
            ],
            "on_CalendarConfiguration": [
                116
            ],
            "on_CallRecordingSummaryConfiguration": [
                117
            ],
            "on_CallRecordingTranscriptConfiguration": [
                118
            ],
            "on_ChatConfiguration": [
                126
            ],
            "on_ChatThreadsConfiguration": [
                129
            ],
            "on_EmailThreadConfiguration": [
                222
            ],
            "on_EmailsConfiguration": [
                226
            ],
            "on_FieldConfiguration": [
                249
            ],
            "on_FieldRichTextConfiguration": [
                257
            ],
            "on_FieldsConfiguration": [
                258
            ],
            "on_FilesConfiguration": [
                264
            ],
            "on_FormFieldConfiguration": [
                267
            ],
            "on_FrontComponentConfiguration": [
                269
            ],
            "on_IframeConfiguration": [
                279
            ],
            "on_LineChartConfiguration": [
                299
            ],
            "on_MessageCampaignBodyConfiguration": [
                323
            ],
            "on_MessageCampaignDetailsConfiguration": [
                324
            ],
            "on_NotesConfiguration": [
                357
            ],
            "on_PieChartConfiguration": [
                392
            ],
            "on_RecordTableConfiguration": [
                422
            ],
            "on_StandaloneRichTextConfiguration": [
                472
            ],
            "on_TasksConfiguration": [
                481
            ],
            "on_TimelineConfiguration": [
                485
            ],
            "on_ViewConfiguration": [
                615
            ],
            "on_WorkflowConfiguration": [
                633
            ],
            "on_WorkflowRunConfiguration": [
                634
            ],
            "on_WorkflowVersionConfiguration": [
                635
            ],
            "__typename": [
                1
            ]
        },
        "WidgetConfigurationType": {},
        "WidgetType": {},
        "WorkflowConfiguration": {
            "configurationType": [
                631
            ],
            "__typename": [
                1
            ]
        },
        "WorkflowRunConfiguration": {
            "configurationType": [
                631
            ],
            "__typename": [
                1
            ]
        },
        "WorkflowVersionConfiguration": {
            "configurationType": [
                631
            ],
            "__typename": [
                1
            ]
        },
        "Workspace": {
            "activationStatus": [
                637
            ],
            "aiAdditionalInstructions": [
                1
            ],
            "aiAgentModelTier": [
                22
            ],
            "aiChatModelTier": [
                22
            ],
            "aiEvaluationModelId": [
                1
            ],
            "aiModelIdByTier": [
                295
            ],
            "allowImpersonation": [
                4
            ],
            "allowedIframeOrigins": [
                1
            ],
            "billingCustomer": [
                84
            ],
            "billingEntitlements": [
                86
            ],
            "billingSubscriptions": [
                102
            ],
            "createdAt": [
                193
            ],
            "currentBillingSubscription": [
                102
            ],
            "customDomain": [
                1
            ],
            "databaseSchema": [
                1
            ],
            "defaultRole": [
                431
            ],
            "deletedAt": [
                193
            ],
            "displayName": [
                1
            ],
            "editableProfileFields": [
                1
            ],
            "eventLogRetentionDays": [
                11
            ],
            "featureFlags": [
                246
            ],
            "hasValidEnterpriseValidityToken": [
                4
            ],
            "hasValidSignedEnterpriseKey": [
                4
            ],
            "id": [
                504
            ],
            "installedApplications": [
                37
            ],
            "inviteHash": [
                1
            ],
            "isAutoModelSelectionEnabled": [
                4
            ],
            "isCampaignClickTrackingEnabled": [
                4
            ],
            "isCampaignOpenTrackingEnabled": [
                4
            ],
            "isCustomDomainEnabled": [
                4
            ],
            "isGoogleAuthBypassEnabled": [
                4
            ],
            "isGoogleAuthEnabled": [
                4
            ],
            "isInternalMessagesImportEnabled": [
                4
            ],
            "isMicrosoftAuthBypassEnabled": [
                4
            ],
            "isMicrosoftAuthEnabled": [
                4
            ],
            "isPasswordAuthBypassEnabled": [
                4
            ],
            "isPasswordAuthEnabled": [
                4
            ],
            "isPublicInviteLinkEnabled": [
                4
            ],
            "isTwoFactorAuthenticationEnforced": [
                4
            ],
            "logo": [
                1
            ],
            "logoFileId": [
                504
            ],
            "metadataVersion": [
                11
            ],
            "subdomain": [
                1
            ],
            "trashRetentionDays": [
                11
            ],
            "updatedAt": [
                193
            ],
            "viewFields": [
                616
            ],
            "viewFilterGroups": [
                619
            ],
            "viewFilters": [
                618
            ],
            "viewGroups": [
                622
            ],
            "viewSorts": [
                625
            ],
            "views": [
                613
            ],
            "workspaceCustomApplication": [
                37
            ],
            "workspaceCustomApplicationId": [
                1
            ],
            "workspaceDiscoverability": [
                642
            ],
            "workspaceMembersCount": [
                11
            ],
            "workspaceUrls": [
                654
            ],
            "__typename": [
                1
            ]
        },
        "WorkspaceActivationStatus": {},
        "WorkspaceAiStats": {
            "conversationsCount": [
                8
            ],
            "skillsCount": [
                8
            ],
            "toolsCount": [
                8
            ],
            "__typename": [
                1
            ]
        },
        "WorkspaceCompanyEnrichmentOutcome": {},
        "WorkspaceCompanyEnrichmentResult": {
            "enrichment": [
                295
            ],
            "isBookCallOnboardingStepPending": [
                4
            ],
            "outcome": [
                639
            ],
            "personEnrichment": [
                295
            ],
            "personOutcome": [
                652
            ],
            "__typename": [
                1
            ]
        },
        "WorkspaceCreationDefaultsDTO": {
            "displayName": [
                1
            ],
            "subdomain": [
                1
            ],
            "__typename": [
                1
            ]
        },
        "WorkspaceDiscoverability": {},
        "WorkspaceInvitation": {
            "email": [
                1
            ],
            "expiresAt": [
                193
            ],
            "id": [
                504
            ],
            "roleId": [
                504
            ],
            "__typename": [
                1
            ]
        },
        "WorkspaceInviteHashValid": {
            "isValid": [
                4
            ],
            "__typename": [
                1
            ]
        },
        "WorkspaceMember": {
            "avatarUrl": [
                1
            ],
            "calendarStartDay": [
                8
            ],
            "colorScheme": [
                1
            ],
            "dateFormat": [
                647
            ],
            "id": [
                504
            ],
            "locale": [
                1
            ],
            "name": [
                271
            ],
            "numberFormat": [
                648
            ],
            "openRecordIn": [
                377
            ],
            "roles": [
                431
            ],
            "timeFormat": [
                649
            ],
            "timeZone": [
                1
            ],
            "uiScale": [
                1
            ],
            "userEmail": [
                1
            ],
            "userId": [
                504
            ],
            "userWorkspaceId": [
                504
            ],
            "__typename": [
                1
            ]
        },
        "WorkspaceMemberApplicationVariables": {
            "userWorkspaceId": [
                504
            ],
            "variables": [
                602
            ],
            "workspaceMemberId": [
                504
            ],
            "__typename": [
                1
            ]
        },
        "WorkspaceMemberDateFormatEnum": {},
        "WorkspaceMemberNumberFormatEnum": {},
        "WorkspaceMemberTimeFormatEnum": {},
        "WorkspaceMigration": {
            "actions": [
                295
            ],
            "applicationUniversalIdentifier": [
                1
            ],
            "__typename": [
                1
            ]
        },
        "WorkspaceNameAndId": {
            "displayName": [
                1
            ],
            "id": [
                504
            ],
            "__typename": [
                1
            ]
        },
        "WorkspacePersonEnrichmentOutcome": {},
        "WorkspaceSetupChatOutcome": {},
        "WorkspaceUrls": {
            "customUrl": [
                1
            ],
            "subdomainUrl": [
                1
            ],
            "__typename": [
                1
            ]
        },
        "WorkspaceUrlsAndId": {
            "id": [
                504
            ],
            "workspaceUrls": [
                654
            ],
            "__typename": [
                1
            ]
        }
    }
}