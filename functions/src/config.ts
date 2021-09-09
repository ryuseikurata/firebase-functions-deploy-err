import * as functions from 'firebase-functions';
export const config = functions.config() as {
    service_account: {
      project_id: string;
      private_key: string;
      client_email: string;
    };
    admin: {
      database_url: string;
    };
    algolia: {
      app_id: string;
      admin_api_key: string;
    };
    general: {
      domain: string;
      /**
       * Stagingの場合はundefinedにしている
       */
      production: string | undefined;
      domain_politician: 'https://politician.polipoli-web.com' | 'https://staging-politician.web.app';
    };
    slack_channel: {
      comment: string;
      comment_admin: string;
      comment_politician_favorites: string;
      comment_politician_helpful_favorites: string;
      comment_citizen_favorites: string;
      comment_check_safe: string;
      comment_check_irrelevant: string;
      comment_check_penalty: string;
      citizen_policy_request_favorite: string;
      policy_request: string;
      policy: string;
      report: string;
      meeting: string;
      meeting_request: string;
      meeting_participation: string;
      meeting_participation_check_safe: string;
      meeting_participation_check_irrelevant: string;
      meeting_participation_check_has_come: string;
      support_policy: string;
      test_migration: string;
      politician_notification: string;
      politician_email_favorite: string;
      politician_email_comments_read: string;
    };
    twitter: {
      consumer_key: string;
      consumer_secret: string;
    };
    sendgrid?: {
      apikey: string;
    };
  };
