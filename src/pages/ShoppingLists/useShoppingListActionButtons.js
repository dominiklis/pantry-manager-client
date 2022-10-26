import { Button, Translate } from "components";
import { useCallback, useMemo } from "react";
import { IoAdd, IoPencil, IoShareSocial, IoTrash } from "react-icons/io5";

const {
  createMenuTabs,
  componentSizes,
  componentColors,
} = require("constantStrings");
const { useIsSmallScreen, useIsWideScreen } = require("hooks");
const { useDispatch, useSelector } = require("react-redux");
const { setCreateMenu } = require("store/actions");

const useShoppingListActionButtons = ({
  componentName,
  shoppingListId,
  selectedAction,
  setSelectedAction,
  ownerId,
}) => {
  const isSmallScreen = useIsSmallScreen();
  const isWideScreen = useIsWideScreen();

  const dispatch = useDispatch();

  const handleAddButton = useCallback(() => {
    dispatch(
      setCreateMenu({
        isVisible: true,
        selectedTab: createMenuTabs.createShoppingListItem,
        shoppingListId,
      })
    );
  }, [dispatch, shoppingListId]);

  const { userId } = useSelector((state) => state.users.user);

  const actionButtons = useMemo(() => {
    const buttons = [
      <Button
        type="button"
        icon={<IoPencil />}
        backgroundColor={
          selectedAction === 0
            ? componentColors.primary
            : isSmallScreen
            ? componentColors.transparent
            : null
        }
        size={componentSizes.small}
        onClick={() => setSelectedAction(0)}
      >
        <Translate section={componentName} text="editButtonText" />
      </Button>,
      <Button
        type="button"
        icon={<IoTrash />}
        backgroundColor={
          selectedAction === 1
            ? componentColors.primary
            : isSmallScreen
            ? componentColors.transparent
            : null
        }
        size={componentSizes.small}
        onClick={() => setSelectedAction(1)}
        disabled={ownerId !== userId}
      >
        <Translate section={componentName} text="deleteButtonText" />
      </Button>,
      <Button
        type="button"
        icon={<IoShareSocial />}
        backgroundColor={
          selectedAction === 2
            ? componentColors.primary
            : isSmallScreen
            ? componentColors.transparent
            : null
        }
        size={componentSizes.small}
        onClick={() => setSelectedAction(2)}
      >
        <Translate section={componentName} text="shareButtonText" />
      </Button>,
    ];

    if (!isWideScreen)
      buttons.unshift(
        <Button
          type="button"
          icon={<IoAdd />}
          size={componentSizes.small}
          onClick={handleAddButton}
        >
          <Translate section={componentName} text="addItemButtonText" />
        </Button>
      );

    return buttons;
  }, [
    componentName,
    handleAddButton,
    isSmallScreen,
    isWideScreen,
    ownerId,
    selectedAction,
    setSelectedAction,
    userId,
  ]);

  return { actionButtons };
};

export default useShoppingListActionButtons;
