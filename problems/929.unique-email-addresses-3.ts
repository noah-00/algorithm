/*
 * @lc app=leetcode id=929 lang=typescript
 *
 * [929] Unique Email Addresses
 */

// @lc code=start
function numUniqueEmails(emails: string[]): number {
  return new Set(
    emails.map(
      (email) =>
        email.substr(0, email.search(/[+@]/)).replace(/\.+/g, "") + email.substr(email.search("@"))
    )
  ).size;
}
// @lc code=end
