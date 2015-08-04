Feature: Create a content page

  As an author
  I want to create content
  So that I sell it

  @dev
  Scenario: Author landing page with markdown
    Given I created a "landingPage" called "Letterpress" at "/" with the following markdown
    """
    ![Cover](/cover.jpg "Cover")

    *Learn how to do something*

    ##Look at this

    [Preview](/preview "Preview Chapter") [Buy](/buy "Buy Content")
    """
    When  a visitor navigates to the page
    Then  they see the sub-heading "Look at this"
    And   they see the cover image from "/cover.jpg"
    And   they see the tag-line "Learn how to do something"
    And   they can navigate to "Preview Chapter" at "/preview"
    And   they can navigate to "Buy Content" at "/buy"